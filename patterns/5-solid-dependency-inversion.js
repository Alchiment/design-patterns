// Low-level module
class ProductInterface {
    getAttributes() {}
}

// Low-level module
class ShoppingInterface {
    addProduct(product) {}
    getProducts() {}
    setProducts(products) {}
}

class Product extends ProductInterface {
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} description
     */
    constructor({name, price, description}) {
        super();
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getAttributes() {
        return {
            name: this.name,
            description: this.description,
            price: this.price,
        }
    }
}

class ShoppingCar extends ShoppingInterface {
    constructor(products = []) {
        super();
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    setProducts(products) {
        this.products = products;
    }
}

class PrintShoppingCar {
    /**
     * @param {ShoppingCar} shoppingCar
     */
    static print(shoppingCar) {
        console.table(shoppingCar.products, ['name', 'price', 'description']);
    }
}

PrintShoppingCar.print(new ShoppingCar([
    new Product({ name: 'Product 1', price: 100, description: 'Description of product 1' }),
    new Product({ name: 'Product 2', price: 200, description: 'Description of product 2' }),
    new Product({ name: 'Product 3', price: 300, description: 'Description of product 3' }),
]));