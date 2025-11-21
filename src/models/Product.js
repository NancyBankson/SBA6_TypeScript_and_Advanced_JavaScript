import { calculateDiscount } from "../utils/discountCalculator.js";
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    stock;
    tags;
    brand;
    sku;
    weight;
    dimensions;
    warrantyInformation;
    shippingInformation;
    availabilityStatus;
    reviews;
    returnPolicy;
    meta;
    thumbnail;
    constructor(id, title, description, category, price, discountPercentage, rating, stock, tags, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, meta, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.tags = tags;
        this.brand = brand;
        this.sku = sku;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInformation = warrantyInformation;
        this.shippingInformation = shippingInformation;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.returnPolicy = returnPolicy;
        this.meta = meta;
        this.thumbnail = thumbnail;
    }
    displayDetails() {
        return `${this.title} costs $${this.price} and is ${this.description}.`;
    }
    getPriceWithDiscount() {
        return Math.round(100 * calculateDiscount(this, 0.1)) / 100;
    }
}
//# sourceMappingURL=Product.js.map