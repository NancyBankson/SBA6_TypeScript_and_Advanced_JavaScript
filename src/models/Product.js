import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    constructor(id, title, description, category, price, discountPercentage, rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }
    getPriceWithDiscount() {
        return Math.round(100 * (this.price - calculateDiscount(this) + calculateTax(this))) / 100;
    }
    displayDetails() {
        return `
      Product: ${this.title}
      Category: ${this.category}
      Price: $ ${this.price}
      Discount: ${this.discountPercentage}%
      Description: ${this.description}
      ID#: ${this.id}
      Ratings: ${this.rating} ⭐`;
    }
}
//# sourceMappingURL=Product.js.map