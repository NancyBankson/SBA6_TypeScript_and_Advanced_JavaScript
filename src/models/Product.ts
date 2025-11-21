import { calculateDiscount } from "../utils/discountCalculator.js";

interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string;
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: string[];
  returnPolicy: string;
  meta: ProductMeta;
  thumbnail: string;

  constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, tags: string, brand: string, sku: string, weight: number, dimensions:  ProductDimensions, warrantyInformation: string, shippingInformation: string, availabilityStatus: string, reviews: string[], returnPolicy: string, meta: ProductMeta, thumbnail: string,) {
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

  displayDetails(): string {
return `${this.title} costs $${this.price} and is ${this.description}.`;
}

 getPriceWithDiscount() {
        return Math.round(100*calculateDiscount(this, 0.1))/100;
    }
}