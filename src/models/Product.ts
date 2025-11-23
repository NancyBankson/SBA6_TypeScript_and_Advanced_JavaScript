import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;

  constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number) {

  this.id = id;
  this.title = title;
  this.description = description;
  this.category = category;
  this.price = price;
  this.discountPercentage = discountPercentage;
  this.rating = rating;
  }

 getPriceWithDiscount() {
        return Math.round(100*(this.price - calculateDiscount(this) + calculateTax(this)))/100;
    }

  displayDetails(): string {
      return `
      Product: ${this.title}
      Category: ${this.category}
      Price: $ ${this.price}
      Discount: ${this.discountPercentage}%
      Description: ${this.description}
      ID#: ${this.id}
      Ratings: ${this.rating} ⭐`
  }}