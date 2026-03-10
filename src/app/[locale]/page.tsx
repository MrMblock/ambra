import { Metadata } from "next";
import Brand from "../components/home/brand";
import TeamSection from "../components/home/team-section";
import Faq from "../components/home/faq";
import HeroSection from "../components/home/hero";
import Innovation from "../components/home/innovation";
import OnlinePresence from "../components/home/online-presence";
import Solutions from "../components/home/solution";
import WebResult from "../components/home/web-result";

export const metadata: Metadata = {
  title: "Accueil | AMBRA",
};


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Brand />
      <WebResult />
      <Innovation />
      <OnlinePresence />
      <TeamSection />
      <Faq />
      <Solutions />
    </main>
  )
}
