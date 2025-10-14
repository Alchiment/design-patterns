class ProductModel {
    constructor({name, price, description, quantity, status}) {
        this.price = price;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.status = status;
    }

    getPrice() {
        return this.price;
    }

    showProductInfo() {
        return `[${this.status}] ${this.name}. ${this.price}.`;
    }
}

module.exports = ProductModel;