const ProductModel = require('../common/models/product.model');
const ServiceProduct = require('../common/models/service-product.model');
const ShoppingCart = require('../common/models/shopping-cart.model');
const StorageManager = require('../common/models/storage-manager.model');
const Logger = require('../common/models/logger.model');

// function Facade for storing products in StorageManager class
function productRegistryFacade(products) {
    const shoppingCart = new ShoppingCart();
    const storage = new StorageManager();
    const service = new ServiceProduct({
        name: 'Delivery',
        description: 'Delivery service products',
        price: 5,
    });

    const writeStorage = (key, value) => {
        Logger.log('Writing value in storage with K', key);
        storage.write(key, value);
    }

    const readStorage = (key) => {
        Logger.log('Reading value in storage with K', key);
        return storage.read(key);
    }

    writeStorage('products', [...products, service]);

    for (product of products) {
        Logger.log('add_product', product.name);
        shoppingCart.addItem(product, product.quantity);
    }

    const totalShoppingCart = shoppingCart.getTotal();
    const summaryShoppingCart = shoppingCart.getSummary();
    Logger.log('total_shopping_cart', totalShoppingCart);

    writeStorage('store_total_shopping_cart', totalShoppingCart);
    writeStorage('store_summary_shopping_cart', summaryShoppingCart);

    readStorage('store_summary_shopping_cart');
    storage.print();
}


const product1 = new ProductModel({
    name: 'Product 1',
    price: 10,
    description: 'Product test #1',
    quantity: 1,
    status: 'active',
});

const product2 = new ProductModel({
    name: 'Product 2',
    price: 20,
    description: 'Product test #2',
    quantity: 3,
    status: 'active',
});

const product3 = new ProductModel({
    name: 'Product 3',
    price: 2,
    description: 'Product test #3',
    quantity: 10,
    status: 'active',
});

const product4 = new ProductModel({
    name: 'Product 4',
    price: 10,
    description: 'Product test #4',
    quantity: 1,
    status: 'active',
});

productRegistryFacade([
    product1,
    product2,
    product3,
    product4,
]);