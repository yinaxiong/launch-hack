/*global _*/
window.ScrollSpy = function () {
    'use strict';

    var elements, options;

    elements = [];
    options = {
        offset: 0
    };

    function init(_options) {
        _.extend(options, _options);

        if (document.addEventListener) {
            document.addEventListener('touchmove', handleScroll, false);
            document.addEventListener('scroll', handleScroll, false);
        } else if (window.attachEvent) {
            window.attachEvent('onscroll', handleScroll);
        }
    }

    function spyOn(domElement) {
        var element;

        element = {};
        element.domElement = domElement;
        element.isInViewPort = false;
        element.position = domElement.getBoundingClientRect().top;
        element.position += document.body.scrollTop;
        element.position += options.offset;
        elements.push(element);
        elements = _.sortBy(elements, 'position');
    }

    function handleScroll() {
        var currentViewPosition, currentElement;

        currentViewPosition = document.body.scrollTop;
        currentElement = _.reduce(elements, function (current, element) {
            element.position = element.domElement.getBoundingClientRect().top + document.body.scrollTop + options.offset;

            if (currentViewPosition >= element.position) {
                return element;
            }

            return current;
        });

        if (currentElement) {
            fireBackInSightEvent(currentElement.domElement);
        }
    }

    function fireBackInSightEvent(domElement) {
        fireEvent('ScrollSpyBackInSight', domElement);
    }

    function fireEvent(eventName, domElement) {
        var event;

        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
            event.data = domElement;
            document.dispatchEvent(event);
        } else if (document.createEventObject) {
            event = document.createEventObject();
            event.data = domElement;
            event.expando = eventName;
            document.fireEvent('onpropertychange', event);
        }
    }

    return {
        init: init,
        spyOn: spyOn,
        handleScroll: handleScroll
    };
};
