class BackpackItemComponent {
    /**
     * @description Add an item to the composite
     * @param {BackpackItemComponent} item
     */
    add(item) {}
    /**
     * @description Remove an item from the composite
     * @param {BackpackItemComponent} item
     */
    remove(item) {}
    /**
     * @description Check if the item is a composite
     * @returns {boolean}
     */
    isComposite() {
        return false;
    }
    /**
     * @description Get the price of the item
     * @returns {number}
     */
    getPrice() {}
}

class ServiceLeaf extends BackpackItemComponent {
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} description
     */
    constructor({name, price, description}) {
        super();
        this.price = price;
        this.name = name;
        this.description = description;
    }

    getPrice() {
        return this.price;
    }
}

class ProductLeaf extends BackpackItemComponent {
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} description
     * @param {number} quantity
     * @param {string} status
     */
    constructor({name, price, description, quantity, status}) {
        super();
        this.price = price;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.status = status;
    }

    getPrice() {
        return this.price;
    }
}

class BackpackComposite extends BackpackItemComponent {
    constructor() {
        super();
        /**
         * @description The children of the composite
         * @type {BackpackItemComponent[]}
         */
        this.children = [];
    }

    add(item) {
        this.children.push(item);
    }

    remove(item) {
        this.children = this.children.filter(child => child !== item);
    }

    getPrice() {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}

function printPrice(item) {
    console.log('Printing price', item.getPrice());
}


const product = new ProductLeaf({
    name: 'Product 1',
    price: 100,
    description: 'Product 1',
    quantity: 1,
    status: 'active'
});

console.log('simple product price', product.getPrice());
console.log('===============================================');

const backpack = new BackpackComposite();
const backPackProducts = new BackpackComposite();
backPackProducts.add(new ProductLeaf({
    name: 'Product pack 1',
    price: 100,
    description: 'Product 1',
    quantity: 1,
    status: 'active'
}));
backPackProducts.add(new ProductLeaf({
    name: 'Product pack 2',
    price: 200,
    description: 'Product 2',
    quantity: 2,
    status: 'active'
}));
const backPackServices = new BackpackComposite();
backPackServices.add(new ServiceLeaf({
    name: 'Service 1',
    price: 100,
    description: 'Service 1'
}));

backpack.add(backPackProducts);
backpack.add(backPackServices);

const backpackOfBooks = new BackpackComposite();

backpackOfBooks.add(backpack);

printPrice(backpack);