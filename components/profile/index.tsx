import styles from "./profile.module.css";
import Image from "next/image";

export default function Profile() {
  return (
    <header className={styles.profile}>
      <Image
        className={styles.photo}
        src="/pedroluis.png"
        alt="me"
        width={124}
        height={124}
      ></Image>

      <div>Pedro Luís Brilhadori</div>
      <div>Front End Developer at AGRO TI | Co-Organizer RP.js</div>
    </header>
  );
}
