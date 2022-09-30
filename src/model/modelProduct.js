const baseUrl = "https://artisanat-madagascar.art/v1/user/produits";

export class Product {
  id;
  description;
  prixht;
  imageMini;
  poid;
  produit;
  couleur;
  taille;
  stock;
  reduction;
  tva;
  categorie;
  image;
  avis;
  prixHTAvecReduc;
  prixTTC;

  /**
   * @constructor
   */
  constructor(data = {}) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  /**
   * Méthode chargé d'aller chercher les informations relatives à toutes les donnée d'une API de produits
   * @returns - tous les categorie présent en BDD
   * @static - une méthode static
   * @async - une méthode asynchrone
   */
  static async findAllProducts() {
    const dataFromAPI = await fetch(baseUrl);
    const data = await dataFromAPI.json();

    if (! data) {
      throw new Error("Aucune data produits dans l'API  !");
    }

    console.log("Les informations de tous les produits ont été demandées !");

    return data.map((product) => new Product(product));
  }
}
