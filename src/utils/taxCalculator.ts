import {Product} from "../models/Product.js"

export function calculateTax(myProduct: Product) {
    let taxRate = 0.0475;
    let discountedPrice: number = myProduct.price - (myProduct.price * myProduct.discountPercentage/100);
    if  (myProduct.category === "grocery") {
        taxRate = 0.03;
    }    
    return discountedPrice * taxRate;
}