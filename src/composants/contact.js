import { createCARD } from "../services/createHTML.js";
import { Card } from "../model/agendaModel.js";

// on récupére les données de notre modéle :
const data = await Card.findAllContact();


/**
 * Notre composant contact
 * @module
 */
export const contact = createCARD(data.src, data.title, data.subTitle);
