import Image from "next/image";
import { ProfileReferences } from "../../firebase/references";
import { useOnValue } from "./profile.hooks";

export default function ProfileImage() {
  const [image] = useOnValue(ProfileReferences.photo, "/loading.gif");

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
