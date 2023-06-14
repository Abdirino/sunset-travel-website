import DSearch from "../components/DSearch/DSearch";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Reviews from "../components/Reviews/Reviews";
import Trip from "../components/Trip";
import HeroIMG from "../images/Sunset-Home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={HeroIMG}
        title="Don't just get there, get there in style"
        text="Celebrate the Journey "
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <DSearch />
      <Destination />
      <Trip />
      <Reviews />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
