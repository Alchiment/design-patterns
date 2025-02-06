/**
 * The Interface Segregation Principle states that no client 
 * should be forced to depend on methods it does not use. 
 * In other words, classes should not be required to implement 
 * interfaces they do not need. By adhering to ISP, 
 * you can ensure that your interfaces are designed correctly, 
 * leading to more maintainable and extensible code.
 * 
 * Important: Javascript doesn't support interfaces, but we can simulate it using classes.
 */

/**
 * Definition: 
 * We have a base product that refers to company Product.
 * This product should have specific attributes related to the business model.
 */

/**
 * @param {string} name
 * @param {number} price
 * @param {string} description
 * @param {string} status
 */
class BusinessProduct {
    constructor({name, price, description, status}) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
    }   
}

/**
 * Definition:
 * On the other hand, we have a Wordpress product that refers to a product from a Wordpress website.
 * This product should persist Wordpress variables to store the data product from the website but I
 * should be related to the business Product.
 * We are segregating WordpressProduct from BusinessProduct interface to avoid forcing the WordpressProduct 
 * to implement methods it doesn't need.
 */

/**
 * @param {string} id
 * @param {string} name
 * @param {string} description
 * @param {string} productType
 * @param {string} status
 * @param {string} sku
 * @param {string[]} images
 */
class WordpressProduct {
    constructor({id, name, description, productType, status, sku, images}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.productType = productType;
        this.status = status;
        this.sku = sku;
        this.images = images;
        // ... other attributes
    }
}