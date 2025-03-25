/**
 * Definition:
 * Make a complicated object into an easy object to initialize, through defining multiple classes or objects.
 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class ShoppingBag {
    constructor(client, products) {
        this.client = client;
        this.products = products;
    }
}

class ShoppingBuilder {
    client = null;
    products = [];
    
    addClient(person) {
        this.client = person;
        return this;
    }

    addProduct(product, quantity) {
        this.products.push({
            product,
            quantity
        });
        return this;
    }
    
    build() {
        return new ShoppingBag(this.client, this.products);
    }
    
}

const person = new Person('Jacinto', 20);
const product1 = new Product('Product 1', 100);
const product2 = new Product('Product 2', 200);
const product3 = new Product('Product 3', 300);

const shoppingBag = new ShoppingBuilder().addClient(person)
    .addProduct(product1, 1)
    .addProduct(product2, 5)
    .addProduct(product3, 2)
    .build();
console.log(shoppingBag);