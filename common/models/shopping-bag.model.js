class ShoppingBagModel {
    /**
     * 
     * @param {*} client 
     * @param {ProductModel|ProductServiceModel} products 
     */
    constructor(client, products) {
        this.client = client;
        this.products = products;
    }
}

module.exports = ShoppingBagModel;