import { createCARD } from "../services/createHTML.js";
import { Card } from "../model/modelClass.js";

const data = await Card.findAllTarif();

/**
 * Notre composant tarif
 * @module
 */
 export const tarif = createCARD(data.src, data.title, data.subTitle);

