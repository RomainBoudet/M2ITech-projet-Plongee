import { divContainer } from "../../src.js";
import { createAccueil } from "./createAccueil.js";

/**
 * Une fonction pour créer un élement HTML selon les paramétres
 * @param {*} type  Le type de l'élément HTML souhaité
 * @param {*} oneClasse Un array, avec les class souhaitées de notre élément HTML
 * @param {*} content Le content, si nécéssaire, de notre élément HTML (pour balise P et a)
 * @param {*} css Le CSS pour notre élément HTML
 * @param {*} parent Le parent de notre élément HTML, intégrer via appenchild() au body
 * @returns Un élement du DOM, a rattacher au DOM
 */
export const createHTML = (type, oneClasse, content, css, parent) => {
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

  if (parent) {
    parent.appendChild(elem);
  }

  return elem;
};

/**
 * Une fonction pour faire une balise image
 * @param {*} css  Le CSS pour la mise en forme de l'image
 * @param {*} src  La src de l'image
 * @param {*} parent Le parent de cette image pour l'intégrer au DOM
 * @returns
 */
export const createIMG = (css, src, parent) => {
  const elem = document.createElement("img");

  if (css && !"") {
    elem.style.cssText = css;
  }

  if (src && !"") {
    elem.src = src;
  }

  if (parent) {
    parent.appendChild(elem);
  }

  return elem;
};

// Seule l'image, le titre et le sous titre peut être changée dans cette card...
/**
 * Une fonction pour une card via bootstrap
 * @param {*} src  La source de la photo de la card
 * @param {*} title Le titre de la card
 * @param {*} subTitle Le sous-titre de la card
 * @returns
 */
export const createCARD = (src, title, subTitle) => {
  const cardDone = createHTML(
    "div",
    "",
    "",
    "",
    //"margin: 10px; display: flex; justify-content: center;align-items: stretch",
    ""
  );
  const card = createHTML(
    "div",
    ["card", "text-center"],
    "",
    "width: 50%;",
    cardDone
  );

  const img = createIMG("", src, card);
  img.className = "card-img-top";

  const cardBody = createHTML("div", ["card-body"], "", "", card);
  createHTML(
    "h5",
    ["card-title"],
    title,
    "color:darkblue;padding:20px;text-align:center",
    cardBody
  );
  createHTML(
    "p",
    ["card-text"],
    subTitle,
    "text-align:center;padding:30px",
    cardBody
  );
  const a = createHTML(
    "a",
    ["btn", "btn-primary"],
    "retour à l'acceuil",
    "text-align:center",
    ""
  );

  a.addEventListener("click", (event) => {
    event.preventDefault();
    divContainer.innerHTML = "";
    createAccueil();
    return document.body.appendChild(divContainer);
  });

  cardBody.appendChild(a);
  return cardDone;
};

// je lui donne en entrée un tableau de produit.
// Etape 1, faire un tableau de cards.
// Etape 2, relier chacune de ces nouvelles card au container parent
export const createCarousel = (arrayData) => {
  const cardContainer = createHTML(
    "div",
    ["card-group"],
    // ["carousel", "card-group"],
    "",
    "diplay: flex; justify-content: center; align-items: center"
    
  );

  const arrayCards = arrayData.map((produit) =>
    createCARD(produit.image[0], produit.produit, produit.description)
  );

  for (const item of arrayCards) {
    cardContainer.appendChild(item);
  };

  return cardContainer;
};

