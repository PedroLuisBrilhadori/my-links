import { CardConfig } from "../card";
import { CardComponent } from "../";
import { useEffect, useState } from "react";

interface InfoConfig {
  title: string;
  infos?: CardConfig[];
  url?: string;
}

function InfoComponent({ title, infos }: InfoConfig) {
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
