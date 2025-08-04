class Product {
    constructor({name, price, quantity}) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ProductForDistribuidor extends Product {
    constructor({name, price, quantity}) {
        super({name, price, quantity});
        this.percentOff = 10;
    }

    getPrice() {
        return this.price * (1 - this.percentOff / 100);
    }
}

class ProductForConsumer extends Product {
    constructor({name, price, quantity}) {
        super({name, price, quantity});
        this.percentOff = 5;
    }
    getPrice() {
        return this.price * (1 - this.percentOff / 100);
    }
}

class Promotion {
    constructor({name, startDate, endDate, percentOff}) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percentOff = percentOff;
    }

    draw(totalPrice) {
        console.log(`Promotion ${this.name} is available from ${this.startDate} to ${this.endDate}. You will pay ${totalPrice} for all products.`);
    }
}

class PromotionForHaircut extends Promotion {
    constructor({name, startDate, endDate, products}) {
        super({name, startDate, endDate, percentOff: 5});
        this.products = products;
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.getPrice() * product.quantity;
        }
        return totalPrice * (1 - this.percentOff / 100);
    }
}

class PromotionForManicure extends Promotion {
    constructor({name, startDate, endDate, products}) {
        super({name, startDate, endDate, percentOff: 10});
        this.products = products;
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.getPrice() * product.quantity;
        }
        return totalPrice * (1 - this.percentOff / 100);
    }
}


const shampoo = new ProductForDistribuidor({name: 'Shampoo', price: 100, quantity: 2});
const conditioner = new ProductForDistribuidor({name: 'Conditioner', price: 150, quantity: 2});
const hairbrush = new ProductForDistribuidor({name: 'Hairbrush', price: 50, quantity: 1});

const promotionHaircut = new PromotionForHaircut({
    name: 'HaircutOff for Distribuidor',
    startDate: '2023-01-01',
    endDate: '2023-01-31',
    products: [shampoo, conditioner, hairbrush]
});

promotionHaircut.draw(promotionHaircut.calculateTotalPrice());

const polish = new ProductForConsumer({name: 'Polish', price: 100, quantity: 1});
const clipper = new ProductForConsumer({name: 'Clipper', price: 50, quantity: 1});

const promotionManicure = new PromotionForManicure({
    name: 'ManicureOff for Consumer',
    startDate: '2023-01-01',
    endDate: '2023-01-31',
    products: [polish, clipper]
});

promotionManicure.draw(promotionManicure.calculateTotalPrice());