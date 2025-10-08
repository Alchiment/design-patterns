abstract class BackpackItemComponent {
    public add(item: BackpackItemComponent): void {}
    public remove(item: BackpackItemComponent): void {}
    public isComposite(): boolean {
        return false;
    }
    abstract getPrice(): number;
}

class ServiceLeaf extends BackpackItemComponent {
    price: number;
    name: string;
    description: string;
    constructor({name, price, description}: any) {
        super();
        this.price = price;
        this.name = name;
        this.description = description;
    }
    public getPrice(): number {
        return this.price;
    }
}

class ProductLeaf extends BackpackItemComponent {
    price: number;
    name: string;
    description: string;
    quantity: number;
    status: string;
    constructor({name, price, description, quantity, status}: any) {
        super();
        this.price = price;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.status = status;
    }
    public getPrice(): number {
        return this.price;
    }
}

class BackpackComposite extends BackpackItemComponent {
    protected children: BackpackItemComponent[] = [];
    public add(item: BackpackItemComponent): void {
        this.children.push(item);
    }
    public remove(item: BackpackItemComponent): void {
        this.children = this.children.filter(child => child !== item);
    }
    public getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
    public isComposite(): boolean {
        return true;
    }
}

function printPrice(item: BackpackItemComponent) {
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

printPrice(backpack);