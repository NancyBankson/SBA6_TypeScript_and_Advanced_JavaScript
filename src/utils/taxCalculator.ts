import {Product} from "../models/Product.js"

export function calculateTax(myProduct: Product) {
    let taxRate = 0.0475;
    if  (myProduct.category === "grocery") {
        taxRate = 0.03;
    }    
    return myProduct.price * taxRate;
}