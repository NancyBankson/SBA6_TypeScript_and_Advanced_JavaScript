import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

// interface ProductDimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// interface ProductMeta {
//   createdAt: string;
//   updatedAt: string;
//   barcode: string;
//   qrCode: string;
// }

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  // stock: number;
  // tags: string;
  // brand: string;
  // sku: string;
  // weight: number;
  // dimensions: ProductDimensions;
  // warrantyInformation: string;
  // shippingInformation: string;
  // availabilityStatus: string;
  // reviews: string[];
  // returnPolicy: string;
  // meta: ProductMeta;
  // thumbnail: string;

  constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number) {

//, stock: number, tags: string, brand: string, sku: string, weight: number, dimensions:  ProductDimensions, warrantyInformation: string, shippingInformation: string, availabilityStatus: string, reviews: string[], returnPolicy: string, meta: ProductMeta, thumbnail: string,

  this.id = id;
  this.title = title;
  this.description = description;
  this.category = category;
  this.price = price;
  this.discountPercentage = discountPercentage;
  this.rating = rating;
  // this.stock = stock;
  // this.tags = tags;
  // this.brand = brand;
  // this.sku = sku;
  // this.weight = weight;
  // this.dimensions = dimensions;
  // this.warrantyInformation = warrantyInformation;
  // this.shippingInformation = shippingInformation;
  // this.availabilityStatus = availabilityStatus;
  // this.reviews = reviews;
  // this.returnPolicy = returnPolicy;
  // this.meta = meta;
  // this.thumbnail = thumbnail;
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