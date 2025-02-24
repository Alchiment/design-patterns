/**
 * Open for Extension, Closed for modifications:
 * This means that a class should be extendable without modifying the class itself.
 * 
 * Extension = It's a heritage were we are using a principal class/method and adding additional functionality.
 * Modification = It's a change in the class/method that can affect the behavior of the class/method. Usually when 
 *      changes are closed and deployed.
 */
import {productStatusConstant} from "../common/constants/product-status.constant";

// Defining a class product to store product information. 
// This class shouldn't be modified, but it should be extendable.
class Product {
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} description
     * @param {string} status 'active', 'inactive', 'draft', 'deleted'
     */
    constructor({name, price, description, status}) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
    }

    getAttributes() {
        return {
            name: this.name,
            description: this.description,
            price: this.price,
            status: this.status
        }
    }
}

class ProductStatus {
    /**
     * @param {Product} product
     */
    static isProductActive(product) {
        return product.status === productStatusConstant.ACTIVE;
    }
}

// =================================================================
// ==================== Implementation =============================
// =================================================================

class MilestonePrinter {
    static print(products) {
        console.table(products, ['name', 'price', 'description', 'isProductActive']);
    }
}

const product1 = new Product({
    name: 'Product 1',
    price: 100,
    description: 'Description of product 1',
    status: productStatusConstant.ACTIVE
});

const product2 = new Product({
    name: 'Product 2',
    price: 200,
    description: 'Description of product 2',
    status: productStatusConstant.INACTIVE
});

MilestonePrinter.print([
    {
        ...product1,
        isProductActive: ProductStatus.isProductActive(product1),
    },
    {
        ...product2,
        isProductActive: ProductStatus.isProductActive(product2),
    }
])