import { createCARD } from "../services/createHTML.js";
import { Card } from "../model/modelClass.js";


const data = await Card.findAllPropos();

/**
 * Notre composant propos
 * @module
 */
 export const propos = createCARD(data.src, data.title, data.subTitle);

