(function () {
	'use strict';

    function qs(query, scope) {
        return (scope || document).querySelector(query);
    }

    function qsa(query, scope) {
        return (scope || document).querySelectorAll(query);
    }

	function resizeStatsFont() {
        var smallestHeader = 100;

        if (!$('.stats').length) {
            return;
        }

        $('.stats').textfill({
            maxFontPixels: 90,
            innerTag: 'h2',
            widthOnly: true,
            success: function (el) {
                var fontSize = parseInt($(el).children('h2').css('font-size'), 10);

                if (fontSize < smallestHeader) {
                    smallestHeader = fontSize;
                }
            },
            complete: function (els) {
                _.forEach(els, function (el) {
                    $(el).children('h2').css('font-size', smallestHeader + 'px');
                });
            }
        });
        $('.stats').textfill({
            maxFontPixels: 25,
            innerTag: 'span',
            widthOnly: true,
            success: function (el) {
                var fontSize = parseInt($(el).children('span').css('font-size'), 10);

                if (fontSize < smallestHeader) {
                    smallestHeader = fontSize;
                }
            },
            complete: function (els) {
                _.forEach(els, function (el) {
                    $(el).children('span').css('font-size', smallestHeader + 'px');
                });
            }
        });
	}

    function setHeightForCodeBlock(el) {
        $(el).height(function () {
            var block;

            block = this.querySelector(':checked + label + .content');
            var height;

            height = _.reduce(block.childNodes, function (sum, elem) {
                if (elem.nodeName !== '#text') {
                    return sum + $(elem).outerHeight();
                }

                return sum;
            }, 0);
            height += $(block).outerHeight() - $(block).height();
            height += $(block).position().top;

            return height;
        });
    }

    function handleBlockSwitch(e) {
        var lang = e.target.attributes['for'].value.match(/.*-(\w*)$/)[1];

        var gap = document.body.scrollTop - $(e.target).offset().top;

        _.forEach(qsa('[type="radio"][value="' + lang + '"]'), function (tab) {
            tab.checked = true;
            setHeightForCodeBlock(tab.parentNode.parentNode);
        });
        document.body.scrollTop = $(e.target).offset().top + gap;
    }

	$(function () {
        $(window).on('resize', _.debounce(function () {
            _.forEach(qsa('.code-blocks'), setHeightForCodeBlock);
            resizeStatsFont();
        }, 150));

		resizeStatsFont();
        _.forEach(qsa('.code-blocks'), function (el) {
            _.forEach(qsa('label', el), function (label) {
                $(label).on('click touchstart', handleBlockSwitch);
            });
            setHeightForCodeBlock(el);
        });
	});

}());