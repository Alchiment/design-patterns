/**
 * Definition:
 * Is a quite simply method which allows you to create an object and it doesn’t have
 * to be called constructor, can be called anything you want.
 */

class ProductType {
    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    // Definition of the factory method
    static newProductType(name, label) {
        return new ProductType(name, label);
    }
}

class Product {
    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @param {ProductType} type 
     */
    constructor(
        name,
        price,
        type,
    ) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    // Definition of the factory method
    static newProduct(name, price, type) {
        return new Product(
            name, 
            price, 
            ProductType.newProductType(type.name, type.label)
        );
    }
}

// Implementation
const productType = new ProductType("standard", "Standard");
const product = Product.newProduct("Product 1", 100, productType);

console.log(product);
console.log(productType);