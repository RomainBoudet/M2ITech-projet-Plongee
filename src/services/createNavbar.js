import { createHTML } from "./createHTML.js";
import { configNavBar as obj } from "../model/configNavBar.js";
import { divContainer } from "../../src.js";
import { createAccueil } from "./createAccueil.js";

/**
 * Une fonction pour créer une navbar en fonction de l'objet de configuration
 * @param {*} obj En objet, la configuration pour la navbar.
 * @return Renvoie une navbar rattaché au body
 */
export const createNavbar = (obj) => {
  const nav = createHTML(
    "nav",
    ["navbar", "font-weight-bold", "white"],
    "",
    "padding:50px;color:grey"
  );

  for (const item in obj) {
 
    const button = createHTML(
      "button",
      "",
      "",
      "margin:20px;border-radius:20px",
      nav
    );
    createHTML(
      "a",
      ["nav-link"],
      `${item}`,
      "color:black;font-weight:bold;font-size:30px",
      button
    );

    document.body.appendChild(nav);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      divContainer.innerHTML = "";
      if (event.target.innerHTML === "acceuil") {
        createAccueil();
        return document.body.appendChild(divContainer);
      }
      console.log("obj[event.target.innerHTML] ==>> ", obj[event.target.innerHTML]);
      divContainer.appendChild(obj[event.target.innerHTML]);
    });
  }
};
