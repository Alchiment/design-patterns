/**
 * Definition:
 * A constructor which adapts an existing interface X to conform to the required interface Y.
 * Vector objects and reactor objects
 */

// Class for rendering table
class Table {
    hedaers = [];
    body = [];

    constructor({headers, body}) {
        this.headers = headers;
        this.body = body;
    }

    printTable() {
        const table = [];
        this.body.forEach(item => {
            const row = {};
            this.headers.forEach(header => {
                row[header] = item[header];
            });
            table.push(row);
        });
        console.table(table);
    }
}

// Products to print in Table
const products = [
    {
        productId: 1,
        productName: 'Rice',
        productPrice: 100,
        stock: 6,
    },
    {
        productId: 2,
        productName: 'Water',
        productPrice: 10,
        stock: 6,
    },
    {
        productId: 3,
        productName: 'Salt',
        productPrice: 10,
        stock: 2,
    },
    {
        productId: 4,
        productName: 'Sugar',
        productPrice: 10,
        stock: 10,
    },
    {
        productId: 5,
        productName: 'Flour',
        productPrice: 10,
        stock: 5,
    },
];

class productAdapter {
    static adapt(products) {
        return products.map(product => {
            return {
                id: product.productId,
                name: product.productName,
                quantity: product.stock,
                // price: product.productPrice,
            }
        })
    }
}

const table = new Table({
    headers: ['id', 'name', 'quantity' /*, price */],
    body: productAdapter.adapt(products), // Print products adapted for the table
});

table.printTable();
