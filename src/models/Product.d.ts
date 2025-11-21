interface ProductDimensions {
    width: number;
    height: number;
    depth: number;
}
interface ProductMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}
export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string;
    brand: string;
    sku: string;
    weight: number;
    dimensions: ProductDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: string[];
    returnPolicy: string;
    meta: ProductMeta;
    thumbnail: string;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, tags: string, brand: string, sku: string, weight: number, dimensions: ProductDimensions, warrantyInformation: string, shippingInformation: string, availabilityStatus: string, reviews: string[], returnPolicy: string, meta: ProductMeta, thumbnail: string);
    displayDetails(): string;
    getPriceWithDiscount(): number;
}
export {};
//# sourceMappingURL=Product.d.ts.map