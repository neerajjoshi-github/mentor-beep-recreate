import CareerSection from "./components/CareerSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MediaPresence from "./components/MediaPresence";
import { Navbar } from "./components/Navbar";
import ProgramsSections from "./components/ProgramsSections";
import TestimonialSection from "./components/TestimonialSection";
import VideoSection from "./components/VideoSection";

const App = () => {
  // window.document.documentElement.classList.add("dark");
  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ProgramsSections />
      <CareerSection />
      <TestimonialSection />
      <MediaPresence />
      <Footer />
    </>
  );
};

export default App;
