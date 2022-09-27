export const acceuil = document.createElement("div");
acceuil.className = "acceuil";
acceuil.style.cssText = "dispay:flex;";

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
  "display:flex;justify-content:space-evenly;;padding:30px";

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

acceuil.appendChild(divContainer2);
acceuil.appendChild(divContainer3);
