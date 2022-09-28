import {configNavBar as obj } from "./config/configNavBar.js";
import { createNavbar } from "./services/createNavbar.js";
import { createAccueil} from "./services/createAccueil.js";
import { createHTML } from "./services/createHTML.js";

export const divContainer = createHTML("div",["container"],"","dispay:flex;");

createNavbar(obj);
createAccueil();
document.body.appendChild(divContainer);
document.body.style.cssText = "background-image: radial-gradient(circle, blue, darkblue);"



