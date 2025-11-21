export async function fetchData() {
    try {
        const response = await
        fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error("Network is not responding")
        }
        const data = await response.json();
    } catch (error) {
        console.error("Fetch error", error);
    }    
}

