import { Product } from "./models/Product.js"
import { calculateTax } from "./utils/taxCalculator.js"
import { calculateDiscount } from "./utils/discountCalculator.js"
import { fetchData } from "./services/apiService.js"


fetchData()
  .then(data => {
    const productArray: Product[] = data!.products;
    for (let i = 0; i < productArray!.length; i++) {
      const newProduct = new Product(productArray[i]!.id, productArray[i]!.title, productArray[i]!.description, productArray[i]!.category, productArray[i]!.price, productArray[i]!.discountPercentage, productArray[i]!.rating);
      console.log(newProduct.displayDetails());
      console.log(`
      Total price with tax and discount: $ ${newProduct.getPriceWithDiscount()}`)
    }


  })
  .catch(error => console.error("Fetch error:", error));

