import { NextSeo } from "next-seo";
import { ProfileComponent } from "../components";

const Home = () => {
  return (
    <div>
      <NextSeo
        title="Pedro Luís Brilhadori - Developer Jr. | fullstack | Co-Orgnizer RP.js"
        description="Pedro Luís Brilhadori portfolio"
      />
      <main>
        <ProfileComponent />
      </main>
    </div>
  );
};

export default Home;
