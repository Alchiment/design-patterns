/**
 * Definition:
 * A component which is instantiated only once and is used throughout the application.
 * It's a good idea for managing low-level modules data based on the Depdendcy Inversion Principle
 */

const mockDataProducts = [
    {
        id: 1,
        name: 'Rice',
        price: 100,
    },
    {
        id: 2,
        name: 'Water',
        price: 10,
    },
    {
        id: 3,
        name: 'Salt',
        price: 10,
    },
    {
        id: 4,
        name: 'Sugar',
        price: 10,
    },
    {
        id: 5,
        name: 'Flour',
        price: 10,
    },
];

class ShoppingBag {
    products = [];

    constructor(products) {
        const instance = this.constructor.instance;
        if (instance) { return instance; }
        this.constructor.instance = this;

        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProductList() {
        return this.products;
    }
}

const shoppingBag = new ShoppingBag(mockDataProducts);

console.log('ShoppingBag instance:', ShoppingBag.instance);
console.log('ShoppingBag quantity products:', shoppingBag.getProductList().length);

shoppingBag.addProduct({
    id: 6,
    name: 'Eggs',
    price: 10,
});

// try to overwrite instance
const shoppingBagOverwrite = new ShoppingBag(mockDataProducts);

console.log('ShoppingBag quantity products after adding one:', shoppingBagOverwrite.getProductList().length);