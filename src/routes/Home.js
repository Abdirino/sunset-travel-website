import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2/Hero2";
import Navbar from "../components/Navbar";
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
      <Destination />
      <Trip />
      <Hero2 />
      <Footer />
    </>
  );
}

export default Home;
