import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroService from "../images/Sunset-service.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service () {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={HeroService}
        title="Services"
      />
      <Trip />
      <Footer />
    </>
    )
}

export default Service;