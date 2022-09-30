
const agendaData = {
  src: "https://media.istockphoto.com/photos/megalodon-scene-3d-illustration-picture-id1004792742?k=20&m=1004792742&s=612x612&w=0&h=iF4-rRjST6WLuEpCmVpqh_jEFyZw6k082gT2ZMavt5Q=",
  title: "Bienvenue sur la page Agenda !",
  subTitle: "Vous retrouverez sur cette page un agenda invisible...",
};

const tarifData = {
    src:   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mola_tecta.jpg/290px-Mola_tecta.jpg",
    title:   "Bienvenue sur la page Tarif !",
    subTitle: "Vous allez prendre cher ! 😱",
};

const proposData = {
    src:    "https://media.istockphoto.com/photos/underwater-cute-salt-water-porcupine-balloonfish-fish-smiling-picture-id638309968?k=20&m=638309968&s=612x612&w=0&h=1RjK5b4ZJFupk4e-KKkl6FaJqpZB1IbbDAkM4QioenE=",
    title:   "Bienvenue sur la page A propos !",
    subTitle:  "Vous retrouverez sur cette page des infos incroyable",
};

const contactData = {
    src:     "https://www.conservation-nature.fr/wp-content/uploads/2021/02/la-baleine-bleue.jpg",
    title:    "Rhô... la belle page !",
    subTitle:  "Equipe de dev fantome, pour des réclamations renseignez vous auprés des commerciaux... ! 😇",
};


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
