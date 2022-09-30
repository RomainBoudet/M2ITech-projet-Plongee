import {configNavBar as obj } from "./src/model/configNavBar.js";
import { createNavbar } from "./src/services/createNavbar.js";
import { createAccueil} from "./src/services/createAccueil.js";
import { createHTML } from "./src/services/createHTML.js";
/**
 * Définition de ma balise container
 */
export const divContainer = createHTML("div",["container"],"","dispay:flex;");


/**
 * Construction de ma page d'acceuil, de la navbar, rattaché 
 */
createNavbar(obj);
createAccueil();

document.body.appendChild(divContainer);



