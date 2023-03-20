import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroContact from "../images/Sunset-contact.jpg"

function Contact () {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={HeroContact}
        title="Contact Us"
      />
    </>
    )
}

export default Contact;