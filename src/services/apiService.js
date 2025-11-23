import { Product } from "../models/Product.js";
export async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network is not responding");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Fetch error:", error);
    }
}
//# sourceMappingURL=apiService.js.map