import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { AdmCards } from "./adm-cards";

export default function AdmScreen() {
  const auth = getAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center m-5">
      <p>Bem Vindo {auth.currentUser?.displayName}! Você está logado.</p>

      <div>
        <a className="mr-1" onClick={() => router.push("/")}>
          Home
        </a>

        <a className="ml-1" onClick={() => auth.signOut()}>
          Sair
        </a>
      </div>

      <AdmCards />
    </div>
  );
}
