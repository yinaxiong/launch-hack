---
title: Example Queries
id: example-queries
---

### Search for *on-sale* products
- You can search using one or more of the 200+ attributes in the <a target="_blank" href="https://developer.bestbuy.com/documentation/products-api"><b>Products API</b></a>.
- Product <a target="_blank" href="https://developer.bestbuy.com/documentation#advancedSearch-search"><b>search</b></a> can take operators like `<>`, `=`, `&`, `|` and `in`.
- Results can be further narrowed using the `show` function (`show=salePrice,regularPrice,percentSavings,dollarSavings,sku`).

{% include responses/search-on-sale.html %}

### Find *Most Popular Viewed* products on **BESTBUY.COM**
The <a target="_blank" href="https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-most-popular-viewed"><b>Most Popular Viewed</b></a> products endpoint returns the top ten products, by rank, of the most frequently viewed products on **BESTBUY.COM**. Also within our Recommendations API you can find

- <a target="_blank" href="https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-trending-products"><b>Trending Products</b></a> - returns top ten products, by rank, based on customer views of the **BESTBUY.COM** product detail page over a rolling three hour time period. Trending growth is based on a comparison against the previous three hour time period. 
- <a target="_blank" href="https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-also-viewed"><b>Also Viewed</b></a> - provides a list of products viewed at the same time as the requested SKU
- <a target="_blank" href="https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-similar-products"><b>Similar Products</b></a> - products that have similar attributes to the requested product

{% include responses/most-viewed.html %}

### Find all *Open Box* offers
You can use the <a target="_blank" href="https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-all-skus"><b>Open Box All SKUs</b></a> endpoint to find all available Open Box offers. You can also search for offers using the following method

- <a target="_blank" href="https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-single-sku"><b>Open Box Single SKU</b></a> - provides Open Box offers based on a single SKU
- <a target="_blank" href="https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-by-list-of-skus"><b>Open Box by List of SKUs</b></a> - provides Open Box offers based on a comma delimited list of SKUs
- <a target="_blank" href="https://developer.bestbuy.com/documentation/buyingOptions-api#documentation/buyingOptions-api-open-box-by-category"><b>Open Box by Category</b></a> - provides Open Box offers based on category id; for more information on categories see the <a target="_blank" href="https://developer.bestbuy.com/documentation/categories-api"><b>Categories API</b></a> documentation

{% include responses/open-box.html %}

### Return closest stores based on latitude and longitude that have a specific product available
 - This example uses a `lat` and `lng` in a ten mile radius to find a store. The area function syntax is `area(location,distance)` where location can be `postalCode` or a `lat` and `lng` pair.
 - Search omits stores that do not have product in stock
 - Search does not return store in order of proximity
 - Search uses <a target="_blank" href="https://developer.bestbuy.com/documentation/stores-api"><b>Stores API</b></a> and <a target="_blank" href="https://developer.bestbuy.com/documentation/products-api"><b>Products API</b></a>

{% include responses/stores-plus-products.html %}

## Find *Reviews* for a product
- You can find ratings and reviews for a particular product (SKU based)
- You can find ratings and reviews for a group of products (e.g., iPhone 6)
- Search uses <a target="_blank" href="https://developer.bestbuy.com/documentation/reviews-api"><b>Reviews API</b></a>

{% include responses/reviews-for-product.html %}

### Using our *Connected Home* endpoint
The <a target="_blank" href="https://developer.bestbuy.com/documentation/smartLists-api"><b>Connected Home</b></a> endpoint helps to guide users to top-rated products related to Connected Home.

- You can also use our Active Adventurer endpoint `http://api.bestbuy.com/beta/products/activeAdventurer?apiKey=<YourAPIKey>`

{% include responses/connected-home.html %}