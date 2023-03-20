import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutHero from "../images/Sunset-About.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutHero}
        title="About Us"
      />
    </>
  );
}

export default About;
