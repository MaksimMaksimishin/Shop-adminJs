export class Product {
    constructor(id, name, price, imageUrl, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = `img/${imageUrl}`; 
        this.description = description;
    }
}