import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroContact from "../images/Sunset-contact.jpg"
import Footer from "../components/Footer";

function Contact () {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={HeroContact}
        title="Contact Us"
      />

      <Footer />
    </>
    )
}

export default Contact;