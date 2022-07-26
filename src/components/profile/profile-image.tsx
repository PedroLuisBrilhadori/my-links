import Image from "next/image";
import { useEffect, useState } from "react";
import { getImage } from "./profile.service";

export default function ProfileImage() {
  const [image, setImage] = useState("/loading.gif");

  useEffect(() => {
    getImage(setImage);
  }, []);

  return (
    <Image
      className="rounded-3xl w-32 h-32 m-6"
      src={image}
      alt="Pedro Luís Brilhadori"
      width={124}
      height={124}
    ></Image>
  );
}
