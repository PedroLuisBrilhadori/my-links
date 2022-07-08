import Image from "next/image";
import { CardComponent } from "..";
import { EmailIcon, GithubIcon, WhatsappIcon } from "../icons";
import LinkedinIcon from "../icons/linkedin";

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

      <h1> Contacts: </h1>
      <CardComponent
        title="Email"
        text="pedroluisbrilhadori@gmail.com"
        icon={EmailIcon()}
        redirect="mailto:pedroluisbrilhadori@gmail.com"
      />
      <CardComponent
        title="Whatsapp"
        text="+55 (16) 99271-5668"
        icon={WhatsappIcon()}
        redirect="https://api.whatsapp.com/send?phone=5516992715668"
      />

      <h1>Social:</h1>
      <CardComponent
        title="Github"
        text="/PedroLuisBrilhadori"
        icon={GithubIcon()}
        redirect="https://github.com/PedroLuisBrilhadori"
      />
      <CardComponent
        title="Linkedin"
        text="Pedro Luís Brilhadori"
        icon={LinkedinIcon()}
        redirect="https://www.linkedin.com/in/pedro-lu%C3%ADs-brilhadori-7752a01a0/"
      />
    </div>
  );
}
