import { acceuil } from "./acceuil.js";


export const propos = document.createElement("div");
propos.style.cssText = "display: flex;justify-content: center;align-items: center;margin: 100px"


const card = document.createElement("div");
card.className = "card";
card.classList.add("text-center");
card.style.cssText = "width: 50%;";

const img = document.createElement("img");
img.className = "card-img-top";
img.src = "https://media.istockphoto.com/photos/underwater-cute-salt-water-porcupine-balloonfish-fish-smiling-picture-id638309968?k=20&m=638309968&s=612x612&w=0&h=1RjK5b4ZJFupk4e-KKkl6FaJqpZB1IbbDAkM4QioenE=";
card.appendChild(img);

const cardBody = document.createElement("div");
cardBody.className = "card-body";


const h5 = document.createElement("h5");
h5.className = "card-title";
const content = document.createTextNode("Bievenus sur la page : propos !");
h5.style.cssText = "color:darkblue;padding:50px;text-align:center";
h5.appendChild(content);
cardBody.appendChild(h5);

const p = document.createElement("p");
p.className = "card-text";
p.style.cssText = "text-align:center;"
const contentP = document.createTextNode("Nous sommes une jeune équipes prêt a développer vos envie ! ");
p.appendChild(contentP);
cardBody.appendChild(p);

const a = document.createElement("a");
a.className = "btn btn-primary";
a.style.cssText = "text-align:center";
const contentA = document.createTextNode("retour à l'acceuil");
a.appendChild(contentA);
a.addEventListener("click", (event) => {
    event.preventDefault();
    const divContainer = document.querySelector(".container");
    divContainer.innerHTML = "";
    // on ajoute notre nouvelle div issue du tableau qui reprend l'import
    divContainer.appendChild(acceuil);
  });
cardBody.appendChild(a);


card.appendChild(cardBody);
propos.appendChild(card);
