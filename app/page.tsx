import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Destinations from "@/components/destinations";
import Experiences from "@/components/experiences";
import Stays from "@/components/stays";
import Gallery from "@/components/gallery";
import Cta from "@/components/cta";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Experiences />
        <Stays />
        <Gallery />
        <Cta />
      </main>
      <Footer />
    </>
  );
}