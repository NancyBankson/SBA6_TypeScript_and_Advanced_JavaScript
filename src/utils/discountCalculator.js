import { Product } from "../models/Product.js";
export function calculateDiscount(myProduct) {
    return myProduct.price * myProduct.discountPercentage / 100;
}
//# sourceMappingURL=discountCalculator.js.map