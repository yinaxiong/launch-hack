---
title: Common Questions
id: faq
---

#### Why are certain products filtered out of my search by default?

Certain attributes, such as `active=true`, `digital=false`, `preowned=false`, or `marketplace=false` are applied by default as part of your query. For example, if your search string is `sku=*` you will only see active products. This is the same as specifying `sku=*&active=true`. If you want a list of all active and inactive products, you can specify `sku=*&active=*`. Because active is a boolean attribute, `active=*` will return products for which active is either true or false. If your search string goes to `sku.xml` or `sku.json` these filters are ignored.

#### Why is the availability or pricing of a product on **BESTBUY.COM** different than on the Products API?

The APIs have some latency with our data (approximately 20 minutes). This may be noticed on some of our more volatile data such as pricing and availability.

#### Why am I exceeding my default Queries Per Second (QPS) limit of 5 QPS and receiving emails and/or seeing 403 errors in my logs?

Try using our `in` operator to create a single query using multiple criteria. Here is an example of `in` list `http://api.remix.bestbuy.com/v1/products(sku in(43900,2088495,7150065))?apiKey=YourAPIKey&show=sku,name`. Additional tools to limit your query are available in our <a target="_blank" href="https://developer.bestbuy.com/documentation#overview"><b>Overview Section</b></a>. You can also contact our operations team via developer@bestbuy.com and we will work with you to adjust your QPS as necessary.