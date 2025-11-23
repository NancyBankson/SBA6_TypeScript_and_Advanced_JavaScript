import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { fetchData } from "./services/apiService.js";
fetchData()
    .then(data => {
    const productArray = data.products;
    // for (let i=0; i<productArray!.length; i++) {
    //   console.log(productArray[i]!.displayDetails);
    // }
    const newProduct = new Product(productArray[0].id, productArray[0].title, productArray[0].description, productArray[0].category, productArray[0].price, productArray[0].discountPercentage, productArray[0].rating);
    console.log(newProduct.displayDetails());
})
    .catch(error => console.error("Fetch error:", error));
//# sourceMappingURL=main.js.map