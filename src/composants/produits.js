import { createCarousel } from "../services/createHTML.js";
import { Product } from "../model/modelProduct.js";

// je récupére mes produits
const data = await Product.findAllProducts();
console.log("data => ", data[0].description); // ok !

/**
 * Notre composant carousel produits
 * @module
 */
 export const produits = createCarousel(data);
