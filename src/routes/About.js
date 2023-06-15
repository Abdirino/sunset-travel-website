import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutHero from "../images/Sunset-About.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import AIcons from "../components/AboutIcons/AIcons";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutHero}
        title="Everything About Us"
      />
      <AboutUs />
      <AIcons />
      <Footer />
    </>
  );
}

export default About;
