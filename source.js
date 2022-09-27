import {configNavBar as obj } from "./configNavBar.js";
import { makeNav } from "./navBar.js";
import { createHTML } from "./createHTML.js";

const divContainer = createHTML("div",["container"],"","dispay:flex;");

makeNav(obj);

const divContainer2 = createHTML("div", "", "", "display:flex;justify-content:space-evenly;padding:30px", divContainer);

const div1 = createHTML("div", "", "", "", divContainer2);
const p = createHTML("p","","Bienvenue chez DiveDev !","color:white;font-size:30px;padding:100px;text-align:center");
div1.appendChild(p);

const div2 = createHTML("div", "", "", "padding:20px", divContainer2);

const img1 = createHTML("img", "", "", "", div2);
img1.src =
  "https://www.letelegramme.fr/images/2011/07/06/1362126_scubster-submarine-2.jpg";

const divContainer3 = createHTML("div", "", "","display:flex;justify-content:space-evenly;padding:30px", divContainer);

const div3 = createHTML("div","","","", divContainer3);
const img2 = createHTML("img", "", "", "width:540px;height: auto;", div3);
img2.src =
  "https://dune-lalonde.com/wp-content/uploads/2015/03/plongee_autonome_1920-Guillaume-Ruoppolo-Dune-HD-104.jpg";


const div4 = createHTML("div", "", "", "", divContainer3);
const p2 = createHTML("p","", "Consulter nos prestation !", "color:white;font-size:30px;padding:100px", div4);

document.body.appendChild(divContainer);
