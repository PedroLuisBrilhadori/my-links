import InfoComponent from "../info/info";
import { useEffect, useState } from "react";
import { getSections, SectionConfig } from "./profile.service";

let section: SectionConfig[] = [];

export function ProfileCards() {
  const [sections, setSections] = useState(section);
  const [sectionLoad, setLoadSection] = useState(true);

  useEffect(() => {
    if (sectionLoad) {
      getSections(setSections);
      setLoadSection(false);
    }
  }, []);

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
