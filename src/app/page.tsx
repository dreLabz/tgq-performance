import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChooseYourGame from "@/components/ChooseYourGame";
import MeetTheCoaches from "@/components/MeetTheCoaches";
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
        <MeetTheCoaches />
        <Instruction />
        <Shorts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
