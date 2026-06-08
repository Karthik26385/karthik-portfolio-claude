import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BusinessImpact from "./components/BusinessImpact";
import Transformations from "./components/Transformations";
import Expertise from "./components/Expertise";
import LeadershipApproach from "./components/LeadershipApproach";
import ScaleExperience from "./components/ScaleExperience";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import CurrentlyExploring from "./components/CurrentlyExploring";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessImpact />
        <Transformations />
        <Expertise />
        <LeadershipApproach />
        <ScaleExperience />
        <Certifications />
        <Experience />
        <CurrentlyExploring />
        <Contact />
      </main>
    </>
  );
}
