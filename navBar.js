import { createHTML } from "./createHTML.js";
import { configNavBar as obj } from "./configNavBar.js";



export const makeNav = (obj) => {

const divContainer = document.querySelector("div.container");
  // impossible de récupérer cette élement du DOM ??
  console.log("document.body ======>>>> ", document.body);

  const nav = createHTML(
    "nav",
    ["justify-content-center", "font-weight-bold", "white"],
    "",
    "padding:50px;color:grey"
  );

  for (const item in obj) {

      console.log("document.body ======>>>> ", document.body);

    console.log("divContainer dans le for of de la navBar = ", divContainer);
    const button = createHTML(
      "button",
      "",
      "",
      "margin:20px;border-radius:20px"
    );
    const a = createHTML(
      "a",
      ["nav-link"],
      `${item}`,
      "color:black;font-weight:bold;font-size:30px",
      button
    );

    nav.appendChild(button);
    document.body.appendChild(nav);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      divContainer.innerHTML ="";
      divContainer.appendChild(obj[event.target.innerHTML]);
    });
  }
};
