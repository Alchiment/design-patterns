class ServiceProductModel {
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} description
     */
    constructor({name, price, description}) {
        this.price = price;
        this.name = name;
        this.description = description;
    }

    getPrice() {
        return this.price;
    }
}

module.exports = ServiceProductModel;