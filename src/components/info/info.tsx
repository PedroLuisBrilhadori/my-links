import { CardComponent } from "../";

import { InfoModel } from "./info.model";

function InfoComponent({ title, infos }: InfoModel) {
  return (
    <div className="flex flex-col items-center w-full mt-3">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="w-full">
        {infos?.map((card) => (
          <CardComponent
            key={card.title}
            title={card.title}
            text={card.text}
            icon={card.icon}
            redirect={card.redirect}
          />
        ))}
      </div>
    </div>
  );
}

export default InfoComponent;
