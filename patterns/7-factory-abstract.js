/**
 * Definition:
 * It is a guide, a kind of suggestion to the inheritance as to what kind of methods actually they provide and implementation for.
 */

// Define an abstract class as base for the inheritance
class AbstractProductType {
    newProductType(name, label) {}
}

// Extend the abstract class
class ProductType extends AbstractProductType {
    constructor(name, label) {
        super();
        this.name = name;
        this.label = label;
    }

    newProductType(name, label) {
        return new ProductType(name, label);
    }
}

// Extend the abstract class
class AbstractProduct {
    newProductType(name, label) {}
}

// Extend the abstract class
class Product extends AbstractProduct {
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
        super();
        this.name = name;
        this.price = price;
        this.type = type;
    }

    newProduct(name, price, type) {
        const productTypeFactory = new ProductType();
        return new Product(
            name, 
            price, 
            productTypeFactory.newProductType(type.name, type.label)
        );
    }
}

// Implementation
const productType = new ProductType("standard", "Standard");

const product = new Product();

console.log(productType);
console.log(product.newProduct("Product 1", 100, productType));