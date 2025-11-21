import {Product} from "../models/Product.js"


export function calculateDiscount(myProduct: Product, discount: number) {
    return myProduct.price * discount;
}