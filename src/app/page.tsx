import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import ChooseYourGame from "@/components/ChooseYourGame";
import MeetTheCoaches from "@/components/MeetTheCoaches";
import InAction from "@/components/InAction";
import TrainWithTGQ from "@/components/TrainWithTGQ";
import WorkSpeaks from "@/components/WorkSpeaks";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Foundation />
        <ChooseYourGame />
        <MeetTheCoaches />
        <InAction />
        <TrainWithTGQ />
        <WorkSpeaks />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
