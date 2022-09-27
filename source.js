import { propos } from "./propos.js";
import { acceuil } from "./acceuil.js";
import { tarif } from "./tarif.js";
import { agenda } from "./agenda.js";
import { contact } from "./contact.js";

const bigContainer = document.createElement("div");
bigContainer.className = "bigContainer";

const divContainer = document.createElement("div");
divContainer.className = "container";

const obj = {
  acceuil: acceuil,
  tarif: tarif,
  agenda: agenda,
  contact: contact,
  propos: propos,
};
const arrayNav = ["acceuil", "tarif", "agenda", "contact", "propos"];

const makeNav = (arrayNav) => {
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.classList.add("justify-content-center", "font-weight-bold", "white");
  nav.cssText = "padding:50px;";

  for (const item of arrayNav) {
    const button = document.createElement("button");
    button.style.cssText = "margin:20px;border-radius:20px";
    const a = document.createElement("a");
    button.appendChild(a);
    a.classList.add("nav-link");

    a.appendChild(document.createTextNode(`${item}`));

    a.style.cssText = "color:black;font-weight:bold;font-size:30px";
    nav.style.cssText = "color:grey";
    nav.appendChild(button);
    document.body.appendChild(nav);

    button.addEventListener("click", (event) => {
      event.preventDefault();

      // on supprime ce qui il y a dans la div divContainer.
      divContainer.innerHTML = "";
      console.log(obj[event.target.innerHTML]);
      console.log(acceuil);
      // on ajoute notre nouvelle div issue du tableau qui reprend l'import

      divContainer.appendChild(obj[event.target.innerHTML]);
    });
  }
};
makeNav(arrayNav);

divContainer.style.cssText = "dispay:flex;";

const divContainer2 = document.createElement("div");
divContainer2.style.cssText =
  "display:flex;justify-content:space-evenly;padding:30px";

const div1 = document.createElement("div");
// un texte dans la 1ere div
const p = document.createElement("p");
const contentP = document.createTextNode("Bienvenue chez DiveDev !");
p.appendChild(contentP);
p.style.cssText = "color:white;font-size:30px;padding:100px";
div1.appendChild(p);

const div2 = document.createElement("div");

// une image dans la deuxiéme div
const img1 = document.createElement("img");
img1.src =
  "https://www.letelegramme.fr/images/2011/07/06/1362126_scubster-submarine-2.jpg";
div2.cssText = "padding:20px";
div2.appendChild(img1);

divContainer2.appendChild(div1);
divContainer2.appendChild(div2);

const divContainer3 = document.createElement("div");
divContainer3.style.cssText =
  "display:flex;justify-content:space-evenly;padding:30px";

const div3 = document.createElement("div");
const img2 = document.createElement("img");
img2.src =
  "https://dune-lalonde.com/wp-content/uploads/2015/03/plongee_autonome_1920-Guillaume-Ruoppolo-Dune-HD-104.jpg";
img2.style.cssText = "width:540px;height: auto;";
div3.appendChild(img2);

const div4 = document.createElement("div");
const p2 = document.createElement("p");
const contentP2 = document.createTextNode("Consulter nos prestation !");
p2.appendChild(contentP2);
p2.style.cssText = "color:white;font-size:30px;padding:100px";
div4.appendChild(p2);

divContainer3.appendChild(div3);
divContainer3.appendChild(div4);

divContainer.appendChild(divContainer2);
divContainer.appendChild(divContainer3);

bigContainer.appendChild(divContainer);
document.body.appendChild(bigContainer);
