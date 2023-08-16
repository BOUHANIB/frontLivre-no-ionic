import {Exposant} from "../Exposant/exposant.model";

export interface Livre {
  livreId: number,
  titre :string,
  auteur:string,
  editeur:string,
  dateEdition:string,
  prix:number,
  isbn:string,
  exposant:Exposant,
}
