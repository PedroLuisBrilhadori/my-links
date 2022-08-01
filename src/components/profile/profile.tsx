import { useOnValue } from "./profile.hooks";

import ProfileImage from "./profile-image";
import { ProfileReferences } from "../../firebase/references";
import { ProfileCards } from "./profile-cards";

export default function Profile() {
  const [name] = useOnValue(ProfileReferences.name);
  const [tags] = useOnValue(ProfileReferences.tags);

  return (
    <div className="flex flex-col m-5 items-center">
      <ProfileImage />

      <h1 className="text-xl">{name}</h1>
      <h3 className=" text-sm">{tags}</h3>

      <ProfileCards />
    </div>
  );
}
