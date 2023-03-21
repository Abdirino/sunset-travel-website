import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroContact from "../images/Sunset-contact.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact () {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={HeroContact}
        title="Contact Us"
      />

      <ContactForm />

      <Footer />
    </>
    )
}

export default Contact;