import React from "react";
import "./tourDetails.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import TourDetailsIMG from "../../images/tourdetailsimg.jpg";
import Footer from "../../components/Footer";

const TourDetails = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={TourDetailsIMG} title="City Tour" />
      <div className="tour-details">
        <div className="t-details">
          <div className="t-detail">
            <div className="t-name">
              <h1>City Tour</h1>
              <h2>
                $850 <span>/ Per Person</span>
              </h2>
            </div>
            <p>
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor,
              nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
              Nam nec tellus a odio tincidunt auctor a ornare. Sed non mauris
              vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit
            </p>
            <div className="t-date"></div>
          </div>
          <div className="t-form">
            <h3>Book This Tour</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <input type="number" placeholder="Phone" />
            <input type="date" placeholder="dd-mm-yyyy" />
            <input type="text" placeholder="number of tickets" />
            <textarea name="" id="" cols="20" rows="10" placeholder="Message"></textarea>
            <button>Check Availability</button>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TourDetails;
