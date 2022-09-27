import { propos } from "./propos.js";
import { acceuil } from "./acceuil.js";
import { tarif } from "./tarif.js";
import { agenda } from "./agenda.js";
import { contact } from "./contact.js";

const createHTML = (type, oneClasse, content, css, parent) => {
  const elem = document.createElement(type);

  if (content && !"") {
    content = document.createTextNode(content);
    elem.appendChild(content);
  }

  if (oneClasse && !"") {
    oneClasse.map((item) => elem.classList.add(item));
  }

  if (css && !"") {
    elem.style.cssText = css;
  }

  if(parent) {
    parent.appendChild(elem);
  }

  return elem;
};

const bigContainer = createHTML("div");
const divContainer = createHTML("div","","","dispay:flex;");

bigContainer.className = "bigContainer";
divContainer.className = "container";

const obj = {
  acceuil: acceuil,
  tarif: tarif,
  agenda: agenda,
  contact: contact,
  propos: propos,
};

const makeNav = (obj) => {
  const nav = createHTML(
    "nav",
    ["justify-content-center", "font-weight-bold", "white"],
    "",
    "padding:50px;color:grey"
  );

  for (const item in obj) {
    const button = createHTML("button","","","margin:20px;border-radius:20px");
    const a = createHTML("a",["nav-link"],`${item}`, "color:black;font-weight:bold;font-size:30px", button );

    nav.appendChild(button);
    document.body.appendChild(nav);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      divContainer.innerHTML = "";
      divContainer.appendChild(obj[event.target.innerHTML]);
    });
  };
};

makeNav(obj);

const divContainer2 = createHTML("div", "", "", "display:flex;justify-content:space-evenly;padding:30px");

const div1 = createHTML("div", "", "", "");
const p = createHTML("p","","Bienvenue chez DiveDev !","color:white;font-size:30px;padding:100px;text-align:center");
div1.appendChild(p);

const div2 = createHTML("div", "", "", "padding:20px");

const img1 = createHTML("img", "", "", "");
img1.src =
  "https://www.letelegramme.fr/images/2011/07/06/1362126_scubster-submarine-2.jpg";
div2.appendChild(img1);

divContainer2.appendChild(div1);
divContainer2.appendChild(div2);

const divContainer3 = createHTML("div", "", "","display:flex;justify-content:space-evenly;padding:30px");

const div3 = createHTML("div","","","");
const img2 = createHTML("img", "", "", "width:540px;height: auto;");
img2.src =
  "https://dune-lalonde.com/wp-content/uploads/2015/03/plongee_autonome_1920-Guillaume-Ruoppolo-Dune-HD-104.jpg";
div3.appendChild(img2);

const div4 = createHTML("div", "", "", "");
const p2 = createHTML("p","", "Consulter nos prestation !", "color:white;font-size:30px;padding:100px");
div4.appendChild(p2);

divContainer3.appendChild(div3);
divContainer3.appendChild(div4);

divContainer.appendChild(divContainer2);
divContainer.appendChild(divContainer3);

bigContainer.appendChild(divContainer);
document.body.appendChild(bigContainer);
