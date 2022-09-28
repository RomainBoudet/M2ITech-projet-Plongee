
import { divContainer } from "../source.js";
import { createHTML, createIMG } from "./createHTML.js";

export const createAccueil = () => {

    const divContainer2 = createHTML("div", "", "", "display:flex;justify-content:space-evenly;padding:30px", divContainer);

    const div1 = createHTML("div", "", "", "", divContainer2);
    const p = createHTML("p","","Bienvenue chez DiveDev !","color:white;font-size:30px;padding:100px;text-align:center", div1);
    const div2 = createHTML("div", "", "", "padding:20px", divContainer2);
    createIMG("","https://www.letelegramme.fr/images/2011/07/06/1362126_scubster-submarine-2.jpg", div2);
    
    const divContainer3 = createHTML("div", "", "","display:flex;justify-content:space-evenly;padding:30px", divContainer);
    
    const div3 = createHTML("div","","","", divContainer3);
    createIMG("width:540px;height: auto;", "https://dune-lalonde.com/wp-content/uploads/2015/03/plongee_autonome_1920-Guillaume-Ruoppolo-Dune-HD-104.jpg", div3);
    const div4 = createHTML("div", "", "", "", divContainer3);
    createHTML("p","", "Consulter nos prestation !", "color:white;font-size:30px;padding:100px", div4);
    
};

