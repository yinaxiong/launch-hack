---
title: Example Queries
---

## Search for on-sale products
- The [**Products API**](/documentation/products-api) has 200+ attributes in which queries can be based (including keyword search).
- [**Searches**](/documentation#advancedSearch-search) can take operators like `<>`, `=`, `&` and `|`.
- Results can be narrowed to just attributes of interest (`show=salePrice,regularPrice,percentSavings,dollarSavings,sku`).

{% include responses/search-on-sale.html %}

## Search for products based on the *Home Automation* category
- Best Buy categories are available by looking at the [**Categories API**](/documentation/categories-api)
- You can also identify for a specific product the categories it is a part of by looking at the `categoryPath.id` and `categoryPath.name` for that product.
- Results are also summarized by [**Facets**](/documentation#facets-facets). Facets can be based on most product attributes and give you a quick summary of results associated to it.

{% include responses/search-home-automation.html %}

## Most Popular Viewed products on **BESTBUY.com**
As part of our Recommendations API you can find:

- [**Most Popular Viewed Products**](/documentation/recommendations-api#documentation/recommendations-api-most-popular-viewed) - provides a list of the most popular products on **BESTBUY.COM** product detail page
- [**Trending Products**](/documentation/recommendations-api#documentation/recommendations-api-trending-products) - provides a list of the top ten products trending on **BESTBUY.COM** over a rolling three hour period
- [**Similar Products**](/documentation/recommendations-api#documentation/recommendations-api-similar-products) - products that have similar attributes to the requested product
- [**Also Viewed Products**](/documentation/recommendations-api#documentation/recommendations-api-also-viewed) - provides a list of products viewed at the same time as the requested SKU

{% include responses/most-viewed.html %}

## Identify closest stores based on **postal code**
 - This example identifies stores based on five digit postal code
 - You can also use `lat` and `lng` as search parameters

{% include responses/search-stores-by-zip.html %}

## Find closest stores that have requested product in stock based on latitude and longitude
 - This example uses a `lat` and `lng` in a ten mile radius to find a store. The area function syntax is `area(location,distance)` where location can be `postalCode` or a `lat` and `lng` pair
 - Search omits stores that do not have product in stock
 - Search does not return store in order of proximity

{#include code:responses/storesPlusProduct}

## Reviews for a product
- You can find ratings and reviews for a particular product (SKU based)
- You can find ratings and reviews for a group of products (i.e. iPhone 6)

{#include code:responses/reviewsForProduct}
