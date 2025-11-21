import {Product} from "../models/Product.js"

export function calculateTax(myProduct: Product, taxRate: number) {
    if  (myProduct.category === "grocery") {
        taxRate = 0.03;
    } else taxRate = 0.0475;
    
    return myProduct.price * (1 + taxRate);
}