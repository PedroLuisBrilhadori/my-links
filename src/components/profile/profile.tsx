import Image from "next/image";
import { InfoComponent } from "..";

export default function Profile() {
  return (
    <div className="flex flex-col m-5 items-center">
      <Image
        className="rounded-3xl w-32 h-32 m-6"
        src="/pedroluis.png"
        alt="me"
        width={124}
        height={124}
      ></Image>

      <h1>Pedro Luís Brilhadori</h1>
      <h3>Front End Developer at AGRO TI | Co-Organizer RP.js</h3>

      <div className="flex flex-col items-center max-w-sm w-full">
        <InfoComponent title="Contacts:" url="/contacts.json"></InfoComponent>
        <InfoComponent title="Socials:" url="/socials.json"></InfoComponent>
      </div>
    </div>
  );
}
