
import { propos } from "../composants/propos.js";
import { tarif } from "../composants/tarif.js";
import { agenda } from "../composants/agenda.js";
import { contact } from "../composants/contact.js";

/**
 * Mon objet de données pour la navbar
 * @return Un objet de configuration, avec en clé le nom qui sera présent dans la navbar et en value, mon composant associées
 */
export const configNavBar = {
    acceuil: "acceuil",
    tarif: tarif,
    agenda: agenda,
    contact: contact,
    propos: propos,
  };


  