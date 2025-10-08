// Base class
class Product {
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} description
     * @param {string} status
     */
    constructor({name, price, description, status}) {
        this.price = price;
        this.name = name;
        this.description = description;
        this.status = status;
    }

    getPrice() {
        return this.price;
    }

    showProductInfo() {
        return `[${this.status}] ${this.name}. ${this.price}.`;
    }
}

// Use Decorator pattern through inheritance
class ExtendedProduct extends Product {
    constructor(product, attributes) {
        super(product);
        this.product = product;
        this.meta_data = attributes.meta_data ?? null;
        this.attributes = attributes.attributes ?? null;
        this.categories = attributes.categories ?? null;
        this.permalink = attributes.permalink ?? null;
        this.slug = attributes.slug ?? null;
        // ...
    }

    getPermalink() {
        this.permalink;
    }

    getSlug() {
        this.slug;
    }

    showProductInfo() {
        return `${this.product.showProductInfo()} ${this.slug}. ${this.attributes?.join(', ')}`
    }

    getPrice() {
        return super.getPrice();
    }
}

// Another way to implement Decorator pattern
class ServiceProduct {
    constructor({name, price, description, status}) {
        // Keeping reference of product
        this.product = new Product({
            name, price, description, status
        });
    }

    getPrice() {
        return this.product.getPrice();
    }

    showProductInfo() {
        return `[Service product] ${this.product.showProductInfo()}`;
    }
}

// ===== Implementation =====
const standardProduct = new Product({
    name: 'T-shirt',
    price: 100,
    description: 'Small T-Shirt',
    status: 'active',
});

console.log('standard product info:', standardProduct.showProductInfo());
const extendedProduct = new ExtendedProduct(standardProduct, {
    meta_data: 'Metadata testing',
    attributes: ['Black color', 'Small size'],
    categories: ['Small', 'Clothes'],
    permalink: 'permalink.com',
    slug: 't-shirt-small-product'
});
console.log('Extended product info:', extendedProduct.showProductInfo());

const serviceProduct = new ServiceProduct({
    name: 'Men clothing service',
    price: 3300,
    description: 'Clothing service exclusively for men',
    status: 'active',
});

console.log('Service product info:', serviceProduct.showProductInfo());