import { About } from "../src/About";
import { Skills } from "../src/Skills";
import { Works } from "../src/Works";
import { Header } from "../src/Header/Header";
import { Footer } from "../src/Footer/Footer";

const Index: React.FC = () => {
  return (
    <>
      <main className={"page-content"}>
        <Header />

        <About />

        <div className={"container mt-8 mb-4"}>
          <Skills />
        </div>

        <div className={"container"}>
          <h2 className={"heading"}>My Work</h2>

          <Works />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Index;
