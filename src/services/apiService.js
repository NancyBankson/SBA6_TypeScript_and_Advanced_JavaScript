import { Product } from "../models/Product.js";
import { NetworkError } from "../utils/errorHandler.js";
function checkNetwork(newresponse) {
    if (!newresponse.ok) {
        throw new NetworkError("Network is not responding");
    }
}
export async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        checkNetwork(response);
        const data = await response.json();
        return data;
    }
    catch (error) {
        if (error instanceof NetworkError) {
            console.error("Network Error:", error.message);
        }
    }
}
//# sourceMappingURL=apiService.js.map