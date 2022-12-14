import { createCARD } from "../services/createHTML.js";
import { Card } from "../model/modelClass.js";


const data = await Card.findAllAgenda();

/**
 * Notre composant agenda
 * @module
 */
 export const agenda = createCARD(data.src, data.title, data.subTitle);

