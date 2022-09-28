import { createHTML } from "./createHTML.js";
import { configNavBar as obj } from "../config/configNavBar.js";
import { divContainer } from "../source.js";
import { createAccueil } from "./createAccueil.js";

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
      divContainer.appendChild(obj[event.target.innerHTML]);
    });
  }
};
