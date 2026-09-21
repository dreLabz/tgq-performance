import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChooseYourGame from "@/components/ChooseYourGame";
import Instruction from "@/components/Instruction";
import Shorts from "@/components/Shorts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ChooseYourGame />
        <Instruction />
        <Shorts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
