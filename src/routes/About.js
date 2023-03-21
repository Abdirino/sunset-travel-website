import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutHero from "../images/Sunset-About.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutHero}
        title="About Us"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
