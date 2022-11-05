import Head from "next/head";
import { About } from "../src/About";
import { Skills } from "../src/Skills";
import { Works } from "../src/Works";
import { Header } from "../src/Header/Header";
import { Footer } from "../src/Footer/Footer";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Daniel Chadwick</title>
                <meta name={"description"} content={"danielchadwick.co.uk powered by Next and NestJS."} />
                <meta content={"width=device-width, initial-scale=0.8"} name={"viewport"} />
                <link rel={"icon"} href={"/favicon.ico"} />
                <link href={"https://fonts.googleapis.com/css?family=Montserrat&display=swap"} rel={"stylesheet"} />
            </Head>

            <main className={"page-content"}>
                <Header />

                <About />

                <div className={"container mt-8 mb-4"}>
                    <Skills />
                </div>

                <div className={"container"}>
                    <h2 className={"heading"}>
                        My Work
                    </h2>

                    <Works />
                </div>

                <Footer />
            </main>
        </>
    );
};

export default Index;
