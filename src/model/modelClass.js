
import { agendaData,tarifData, proposData, contactData } from "../../data/cardData.js";

  
export class Card {
  src;
  title;
  subTitle;

  /**
   * @constructor
   */
  constructor(data = {}) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  // Rhô la belle API ...
  // https://artisanat-madagascar.art/v1/user/produits

  // on prépare le terrain pour une requete asyncrone vers API !

  /**
   * Méthode chargé d'aller chercher les informations relatives à toutes les donnée de la Card Contact
   * @returns - tous les categorie présent en BDD
   * @static - une méthode static
   * @async - une méthode asynchrone
   */
  static async findAllContact() {

    const data = contactData;

    if (!data) {
      throw new Error("Aucun data pour la card Contact !");
    }

    console.log('Les informations de la card Contact ont été demandées !');

    return new Card(data);
  };

  /**
   * Méthode chargé d'aller chercher les informations relatives à toutes les donnée de la Card Contact
   * @returns - tous les categorie présent en BDD
   * @static - une méthode static
   * @async - une méthode asynchrone
   */
   static async findAllPropos() {

    const data = proposData;

    if (!data) {
      throw new Error("Aucun data pour la card Propos !");
    }

    console.log('Les informations de la card Propos ont été demandées !');

    return new Card(data);
  };

    /**
   * Méthode chargé d'aller chercher les informations relatives à toutes les donnée de la Card Tarif
   * @returns - tous les categorie présent en BDD
   * @static - une méthode static
   * @async - une méthode asynchrone
   */
     static async findAllTarif() {

        const data = tarifData;
    
        if (!data) {
          throw new Error("Aucun data pour la card Tarif !");
        }
    
        console.log('Les informations de la card Tarif ont été demandées !');
    
        return new Card(data);
      };


   /**
   * Méthode chargé d'aller chercher les informations relatives à toutes les donnée de la Card Agenda
   * @returns - tous les categorie présent en BDD
   * @static - une méthode static
   * @async - une méthode asynchrone
   */
   static async findAllAgenda() {

    const data = agendaData;

    if (!data) {
      throw new Error("Aucun data pour la card Agenda !");
    }

    console.log('Les informations de la card Agenda ont été demandées !');

    return new Card(data);
  };


}
