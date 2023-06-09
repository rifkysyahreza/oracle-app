import Head from "next/head";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Image from "next/image";
import Konten1 from "./assets/1.png";
import Konten2 from "./assets/2.png";
import Konten3 from "./assets/3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black">
        {/* Navbar */}
        <header>
          <Navbar></Navbar>
        </header>

        <main className="px-52 pt-32">
          {/* Carousel */}
          <div className="max-w-full container py-10 ">
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <div>
                <Image src={Konten1} alt="Carousel 1"></Image>
              </div>
              <div>
                <Image src={Konten2} alt="Carousel 1"></Image>
              </div>
              <div>
                <Image src={Konten3} alt="Carousel 1"></Image>
              </div>
            </Carousel>
          </div>

          {/* Product */}
          <div className="bg-secondary">
            <ProductList></ProductList>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-secondary w-full mt-10">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
