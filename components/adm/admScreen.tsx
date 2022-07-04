import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

export default function AdmScreen() {
  const auth = getAuth();
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
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
