import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroService from "../images/Sunset-service.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import DSearch from "../components/DSearch/DSearch";

function Service () {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={HeroService}
        title="Tours"
      />
      <DSearch />
      <Trip />
      <NewsLetter />
      <Footer />
    </>
    )
}

export default Service;