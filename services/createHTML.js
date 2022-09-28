import { divContainer } from "../source.js";
import { createAccueil } from "./createAccueil.js";

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
  
    if(parent) {
      parent.appendChild(elem);
    }
  
    return elem;
  };

  export const createIMG = (css, src, parent) => {
    const elem = document.createElement("img");
  
    if (css && !"") {
      elem.style.cssText = css;
    }

    if (src && !"") {
      elem.src = src;
    }
  
    if(parent) {
      parent.appendChild(elem);
    }
  
    return elem;
  };

  // Seule l'image, le titre et le sous titre peut être changée dans cette card...
  export const createCARD = (src, title, subTitle) => {
    const cardDone = createHTML("div", "", "", "display: flex;justify-content: center;align-items: center;margin: 100px","");
    const card = createHTML("div", ["card", "text-center"],"", "width: 50%;", cardDone );

    const img = createIMG("", src, card );
    img.className = "card-img-top";

    const cardBody = createHTML("div", ["card-body"], "", "", card );
    createHTML("h5", ["card-title"], title, "color:darkblue;padding:20px;text-align:center", cardBody);
    createHTML("p", ["card-text"],subTitle, "text-align:center;padding:30px", cardBody);
    const a = createHTML("a", ["btn", "btn-primary"], "retour à l'acceuil", "text-align:center", "");
    
    a.addEventListener("click", (event) => {
      event.preventDefault();
      divContainer.innerHTML = "";
      createAccueil();
      return document.body.appendChild(divContainer);
    });

    cardBody.appendChild(a);
    return cardDone;

  };