// je crée une élément
const newP = document.createElement("p");
// je remplis ce nouvel élément par du texte
const newContent = document.createTextNode("Welcome to DiveDEV");
newP.appendChild(newContent);

// j'ajoute ma nouvele création au dom
const body = document.querySelector("body");
document.body.appendChild(newP);
newP.className = "justify-content-center";
newP.classList.add("navbar-brand");

const a = document.createElement("a");
const button = document.createElement("button");
const span = document.createElement("span");

const content2 = document.createTextNode("DIVEDEV");
a.appendChild(content2);
a.classList.add("navbar-brand");
a.href = "http://romainboudet.fr";

const arrayNav = ["Acceuil", "Tarif", "Agenda", "Contact", "Propos"];



const makeNav = (arrayNav) => {
    const nav = document.createElement("nav");
    nav.className = "nav";
    nav.href = "https://romainboudet.fr";
    nav.classList.add('justify-content-end', 'font-weight-bold', 'white')

        for (const item of arrayNav) {
            
            const a = document.createElement("a");
            a.classList.add("nav-link");
            a.href = "https://romainboudet.fr";


            a.appendChild(document.createTextNode(`${item}`));
            console.log(item);

            nav.appendChild(a);
            nav.appendChild(newP);
            body.appendChild(nav);
    };
 
};
makeNav(arrayNav);

document.body.nav.a.style.color = "#red";

