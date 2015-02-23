---
title: Example Queries
id: example-queries
---

## Search for *on-sale* products
- The [**Products API**](/documentation/products-api) has 200+ attributes on which queries can be based (including keyword search).
- [**Searches**](/documentation#advancedSearch-search) can take operators like `<>`, `=`, `&` and `|`.
- Results can be narrowed to just attributes of interest (`show=salePrice,regularPrice,percentSavings,dollarSavings,sku`).

{% include responses/search-on-sale.html %}

## Find *Most Popular Viewed* products on **BESTBUY.COM**
As part of our Recommendations API you can find:

- [**Most Popular Viewed Products**](https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-most-popular-viewed) - provides a list of the most popular products on BESTBUY.COM product detail page
- [**Trending Products**](https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-trending-products) - provides a list of the top ten products trending on **BESTBUY.COM** over a rolling three hour period
- [**Also Viewed Products**](https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-also-viewed) - provides a list of products viewed at the same time as the requested SKU
- [**Similar Products**](https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-similar-products) - products that have similar attributes to the requested product

{% include responses/most-viewed.html %}

## Find Open Box Offers
The Open Box endpoints return all available Open Box offers. You can search for offers using multiple methods.

- [**Open Box by Single SKU**](https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-single-sku) - provides offers based on a single SKU
- [**Open Box by List of SKUs**](https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-by-list-of-skus) - provides offers based on a comma delimited list of SKUs
- [**Open Box by Category**](https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-by-category) - provides offers based on category id; for more information on categories see the [Category API](https://developer.bestbuy.com/documentation/categories-api)
- [**Open Box All SKUs**](https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-all-skus) - provides all Open Box offers

<!-- {% include responses/open-box.html %} -->

## Find closest stores with a specific *product* based on *lat* and *lng*
 - This example uses a `lat` and `lng` in a ten mile radius to find a store. The area function syntax is `area(location,distance)` where location can be `postalCode` or a `lat` and `lng` pair
 - Search omits stores that do not have product in stock
 - Search does not return store in order of proximity
 - Search uses [**Stores API**](documentation/stores-api) and [**Products API**](documentation/products-api)

{% include responses/stores-plus-products.html %}

## Find *Reviews* for a product
- You can find ratings and reviews for a particular product (SKU based)
- You can find ratings and reviews for a group of products (e.g., iPhone 6)
- Search uses [**Reviews API**](documentation/reviews-api)

{% include responses/reviews-for-product.html %}

## Return SmartList Connected Home products
The Connected Home endpoint helps to guide users to top-rated products related to Connected Home.

{% include responses/connected-home.html %}