import { Product } from "../models/Product.js";

interface productObject {
    products: Product[];

}

export async function fetchData(): Promise<productObject | undefined> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Network is not responding");
        }
        const data: productObject = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

