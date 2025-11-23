import {Product} from "../models/Product.js"


export function calculateDiscount(myProduct: Product) {
    return myProduct.price * myProduct.discountPercentage / 100;
}