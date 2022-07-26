import Image from "next/image";
import { ProfileCards } from "./profile-cards";
import ProfileImage from "./profile-image";

export default function Profile() {
  return (
    <div className="flex flex-col m-5 items-center">
      <ProfileImage />

      <h1>Pedro Luís Brilhadori</h1>
      <h3>Front End Developer at AGRO TI | Co-Organizer RP.js</h3>

      <ProfileCards />
    </div>
  );
}
