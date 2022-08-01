import { CardModel } from "../card/card.models";

export interface SectionModel {
  title: string;
  cards?: CardModel[];
}
