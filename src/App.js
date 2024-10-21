import "./app.scss";
import AnimationControls from "./components/AnimationControls";
import Home from "./components/Home";
import ScrollAnimations from "./components/ScrollAnimations";
import ViewBasedAnimation from "./components/ViewBasedAnimation";
import Navbar from "./components/core/hero/Navbar"
import Hero from "./components/core/hero/Hero"
import Sidebar from "./components/core/sidebar/Sidebar";
import TestSlider from "./components/TestSlider"
import StackedServices from "./components/StackedServices";
import StackingCards from "./components/StackedServices";
import ServiceCard from "./components/ServiceCard";
import ServicesHero from "./components/ServicesHero";
import ServicesHub from "./components/ServicesHub";
import Line from "./components/Line";
import VerticalSlider from "./components/VerticalSlider";
import StickyProgress from "./components/StickyProgress";

function App() {
  return (
   < >
      {/* <Sidebar/>   */}

       {/* <Navbar/>

        <Hero/> */}

        <ServicesHub/>
        <Line/>
        <StickyProgress />
        
      {/* <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section> */}
      {/* <AnimationControls/> */}
      {/* <ViewBasedAnimation/> */}
      {/* <ScrollAnimations/> */}
   </>
  );
}

export default App;
