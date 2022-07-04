import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { getBlob, getStorage, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";
import { ChangeEvent, useState } from "react";

let file: File;

export default function AdmScreen() {
  const auth = getAuth();
  const router = useRouter();
  const storage = getStorage(getApp());
  const picRef = ref(storage, "images/profile.png");
  const [image, setImage] = useState(file);
  const [createObjectURL, setCreateObjectURL] = useState("/x.png");

  getBlob(picRef).then((snap) => {
    setCreateObjectURL(URL.createObjectURL(snap));
  });

  const changeProfilePic = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      setImage(image);
      setCreateObjectURL(URL.createObjectURL(image));

      uploadBytes(picRef, image).then((snap) => {
        console.log("foto enviada");
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <input type="file" onChange={(e) => changeProfilePic(e)}></input>

      <img src={createObjectURL} alt="me"></img>

      <p>Bem Vindo {auth.currentUser?.displayName}! Você está logado.</p>

      <div>
        <a style={{ marginRight: "5px" }} onClick={() => router.push("/")}>
          Home
        </a>

        <a style={{ marginLeft: "5px" }} onClick={() => auth.signOut()}>
          Sair
        </a>
      </div>
    </div>
  );
}
