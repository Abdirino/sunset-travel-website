import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
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
    </>
  );
}

export default Home;
