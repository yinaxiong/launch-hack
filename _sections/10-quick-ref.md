---
title: Quick Reference
id: quick-ref
---

## Best Buy API Overview

<div class="apis">
    {% for api in site.apis %}
    {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
    {% if thecycle == 'odd' %}
    <div class="row">
    {% endif %}
        <div class="col-sm-6 {{api.class}}">
            <div class="media">
                <a href="{{api.href}}">
                    <img src="{{ site.baseurl }}{{api.retina}}" alt="" class="media-object pull-left">
                </a>
                <div class="media-body">
                    <h4 class="media-heading">
                        <a href="{{api.href}}">{{api.name}}</a>
                    </h4>
                    {{api.content}}
                </div>
            </div>
        </div>
    {% if thecycle == 'even' or forloop.last %}
    </div>
    {% endif %}
    {% endfor %}
</div>

## Narrowing Your Results

### [Search](/documentation#advancedSearch-search)
There are many ways to search for a singular product or group of products. These common operators are `=`,`&` for **and**, `|` for **or** and `<>` for **less than** and **greater than** can be used with most attributes. For Example: using the Products API `/products(manufacturer=canon&salePrice<1000)`

### [Show](/documentation#show-show)
Limit which attributes are returned with **show**. For example: `/products(preowned=true)?show=sku,preowned,name,active`

### [Sort](/documentation#sort-sort)
Specifies the order in which items are sorted in the response. You can sort by ascending `sort=attribute.asc` and descending `sort=attribute.dsc`. You will want to replace *attribute* with the attribute name that should be used as the basis of the search. For Example `/products(categoryPath.name="All%20Flat-Panel%20TVs")?sort=salePrice.dsc`

### [Pagination](/documentation#pagination-pagination)
By default we include 10 results per page but you can request up to 100 results per page using `pageSize`. If your results are greater than 100 you can specify subsequent pages using `page`. For Example: `/products(type=Movie)?pageSize=3&page=1000`

### [Facet](/documentation#facets-facets)
The Facet functionality provides a separate summary of the results based on attribute and depth identified. For Example: `facet=color`

### [Response Format](/documentation#responseFormat-response-format)
Results can be returned using XML (default) or in JSON using `/products/8880044.json` or `format=json`. For Example: `/stores(region=ut)?format=json&show`

### [JSONP](/documentation#responseFormat-response-format)
Dynamically inject script elements into your web pages using JSONP.