import { useSections } from "./profile.hooks";

import InfoComponent from "../info/info";

export function ProfileCards() {
  const [sections] = useSections();

  return (
    <div className="flex flex-col items-center max-w-sm w-full">
      {sections?.map((section) => {
        return (
          <InfoComponent
            key={section.title}
            title={`${section.title.toUpperCase()}:`}
            infos={section.cards}
          ></InfoComponent>
        );
      })}
    </div>
  );
}
