import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

import { CardModel } from "../card";
import { ProfileReferences } from "../../firebase";
import { SectionModel } from "./profile.models";

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

/**
 *  get cards of a section from realtime database
 */
export function getCards(section: string) {
  const { reference } = referenceInit(`${ProfileReferences.cards}/${section}`);
  const cards: CardModel[] = [];

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
export function useSections() {
  const defaultState: SectionModel[] = [];

  const [state, setState] = useState(defaultState);
  const { reference } = referenceInit(ProfileReferences.cards);

  useEffect(() => {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      const sections: SectionModel[] = [];

      for (let section in data) {
        sections.push({
          title: section,
          cards: getCards(section),
        });
      }
      setState(sections);
    });
  }, [reference]);

  return [state];
}

export function useOnValue(referenceName: string, defaultState?: string) {
  const [state, setState] = useState(defaultState ?? "");

  const { reference } = referenceInit(referenceName);

  useEffect(() => {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setState(data);
    });
  }, [reference]);

  return [state];
}
