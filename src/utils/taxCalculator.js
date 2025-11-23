import { Product } from "../models/Product.js";
export function calculateTax(myProduct) {
    let taxRate = 0.0475;
    let discountedPrice = myProduct.price - (myProduct.price * myProduct.discountPercentage / 100);
    if (myProduct.category === "groceries") {
        taxRate = 0.03;
    }
    return discountedPrice * taxRate;
}
//# sourceMappingURL=taxCalculator.js.map