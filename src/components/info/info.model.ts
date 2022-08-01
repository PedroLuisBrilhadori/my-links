import { CardModel } from "../card";

export interface InfoModel {
  title: string;
  infos?: CardModel[];
  url?: string;
}
