import { CardConfig } from "../card";
import { CardComponent } from "../";
import { useEffect, useState } from "react";

interface InfoConfig {
  title: string;
  infos?: CardConfig[];
  url?: string;
}
const Cards: CardConfig[] = [];

function InfoComponent({ title, infos, url }: InfoConfig) {
  if (!url && !infos) {
    throw new Error("Erro, informações não disponíveis");
  }

  const [cards, setCards] = useState(infos);
  const [loadCards, setLoadCards] = useState(infos ? true : false);

  const fetchCards = async () => {
    try {
      const response = await fetch(url ?? "");
      const json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      if (!url) {
        setLoadCards(true);
        return;
      }

      setLoadCards(false);
      const cards = await fetchCards();
      if (cards.success) {
        setCards(cards.data);
        setLoadCards(true);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-3">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="w-full">
        {cards?.map((card) => (
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
