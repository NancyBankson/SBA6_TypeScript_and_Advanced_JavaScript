import { Product } from "../models/Product.js";
import { NetworkError } from "../utils/errorHandler.js";

interface productObject {
    products: Product[];
}

function checkNetwork(newresponse: any) {
    if (!newresponse.ok) {
        throw new NetworkError("Network is not responding");
    }
}

export async function fetchData(): Promise<productObject | undefined> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        checkNetwork(response);
        const data: productObject = await response.json();
        return data;
    } catch (error) {
        if (error instanceof NetworkError) {
            console.error("Network Error:", error.message);
        }
    }
}

