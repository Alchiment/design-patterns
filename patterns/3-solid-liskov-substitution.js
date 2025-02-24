/**
 * The Liskov Substitution Principle (LSP) is a fundamental principle in object-oriented programming 
 * that states that objects of a superclass should be able to be replaced with objects of a subclass
 * without affecting the correctness of the program.
 */

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
    
    printProperties() {
        console.table(this.getAttributes());
    }
}

// Extending Product class functionality and adding new methods (setName)
class AccountingProduct extends Product {
    constructor(attrs) {
        super(attrs);
    }
    
    setName(name) {
        this.name = name;
    }
    
    printProperties() {
        console.log('Replace printing values without affecting base printProperties method: ', this.getAttributes());
    }
}

const baseProduct = new Product({
    name: 'Product 1',
    price: 100,
    description: 'Description of product 1',
    status: 'active'
});

baseProduct.printProperties();

const accountingProduct = new AccountingProduct(
    baseProduct.getAttributes(),
);

accountingProduct.setName('Accounting Product 1');
accountingProduct.printProperties();
baseProduct.printProperties();
