/**
 * Definition:
 * A factory is just a separate class or separate component which takes other responsibilities of creating objects.
 * It is a class that is responsible for creating objects.
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

class ProductTypeFactory {
    // Not necessary to be a static method
    newStandardProductType() {
        return new ProductType("standard", "Standard");
    }

    // Or you can have a static method
    static newServiceProductType() {
        return new ProductType("service", "Service");
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

class ProductFactory {
    static newStandardProduct(name, price) {
        const productTypeFactory = new ProductTypeFactory();
        return new Product(name, price, productTypeFactory.newStandardProductType());
    }

    static newServiceProduct(name, price) {
        return new Product(name, price, ProductTypeFactory.newServiceProductType());
    }
}

// Implementation
// Using factory through static method
const standardProduct = ProductFactory.newStandardProduct("Product standard", 100);
const serviceProduct = ProductFactory.newServiceProduct("Product service", 200);

console.log(standardProduct);
console.log(serviceProduct);