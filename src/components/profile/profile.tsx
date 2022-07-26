import { useEffect, useState } from "react";
import { ProfileCards } from "./profile-cards";
import ProfileImage from "./profile-image";
import { getName, getTags } from "./profile.service";

export default function Profile() {
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    getName(setName);
    getTags(setTags);
  }, []);

  return (
    <div className="flex flex-col m-5 items-center">
      <ProfileImage />

      <h1>{name}</h1>
      <h3>{tags}</h3>

      <ProfileCards />
    </div>
  );
}
