import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroService from "../images/Sunset-service.jpg"

function Service () {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={HeroService}
        title="Services"
      />
    </>
    )
}

export default Service;