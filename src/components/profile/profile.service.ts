import { getDatabase, ref, onValue, Database } from "firebase/database";
import { Dispatch, SetStateAction } from "react";
import { CardConfig } from "../card";
import { Profile } from "../../firebase/references";

/**
 * return reference and database
 */
function referenceInit(reference: string) {
  const database = getDatabase();

  return {
    database,
    reference: ref(database, reference),
  };
}

export interface SectionConfig {
  title: string;
  cards?: CardConfig[];
}

/**
 *  get cards of a section from realtime database
 */
export function getCards(section: string) {
  const { reference } = referenceInit(`${Profile.cards}/${section}`);
  const cards: CardConfig[] = [];

  onValue(reference, (snapshot) => {
    const data = snapshot.val();

    for (let info in data) {
      cards.push(data[info]);
    }
  });

  return cards;
}

/**
 * get sections of links from realtime database
 */
export function getSections(
  setSections: Dispatch<SetStateAction<SectionConfig[]>>
) {
  const { reference } = referenceInit(Profile.cards);

  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    const sections: SectionConfig[] = [];

    for (let section in data) {
      sections.push({
        title: section,
        cards: getCards(section),
      });
    }
    setSections(sections);
  });
}

/**
 * get image from realtime database of google firebase
 */
export function getImage(setImage: Dispatch<SetStateAction<string>>) {
  const { reference } = referenceInit(Profile.photo);

  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    setImage(data);
  });
}

/**
 * get name from realtime database of google firebase
 */
export function getName(setName: Dispatch<SetStateAction<string>>) {
  const { reference } = referenceInit(Profile.name);

  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    setName(data);
  });
}

/**
 * get tags from realtime database of google firebase
 */
export function getTags(setTags: Dispatch<SetStateAction<string>>) {
  const { reference } = referenceInit(Profile.tags);

  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    setTags(data);
  });
}
