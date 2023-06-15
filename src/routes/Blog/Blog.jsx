import React from "react";
import "./blog.css";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer";
import blogHero from "../../images/Sydney-opera-House 1.jpg";
import Hero from "../../components/Hero";

import blogIMG1 from "../../images/BlogImg1.jpg";
import blogIMG2 from "../../images/BlogIMG2.jpg";
import blogIMG3 from "../../images/BlogIMG3.jpg";
import blogIMG4 from "../../images/BlogIMG4.jpg";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={blogHero} title="Our Blogs" />

      <div className="blogs">
        <div className="blog">
          <div className="b-img">
            <img src={blogIMG1} alt="" />
          </div>
          <div className="b-details">
            <h2>
              The Amazing Difference a Year of Travelling Abroad Can Make in
              Your Life
            </h2>
            <p>
              Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
              turpis libero sagittis suspendisse. Velit fringilla a. A lorem
              ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
              magnis sodales mauris pede. Quo venenatis volutpat aliquam ut
              libero. Dui urna pede velit...
            </p>
            <div className="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>April 5, 2023</p>
              <i class="fa-solid fa-briefcase"></i>
              <p>Adventure, Cruises</p>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="b-img">
            <img src={blogIMG2} alt="" />
          </div>
          <div className="b-details">
            <h2>
              My Favorite Travel Books of 2016 and What Makes Them Worth Your
              Money
            </h2>
            <p>
              Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
              turpis libero sagittis suspendisse. Velit fringilla a. A lorem
              ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
              magnis sodales mauris pede. Quo venenatis volutpat aliquam ut
              libero. Dui urna pede velit...
            </p>
            <div className="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>May 5, 2022</p>
              <i class="fa-solid fa-briefcase"></i>
              <p>Exotic, Travel</p>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="b-img">
            <img src={blogIMG3} alt="" />
          </div>
          <div className="b-details">
            <h2>
              My Ultimate Guide to Dubai: Tips, Costs, Itineraries, and Favorite
              Destinations
            </h2>
            <p>
              Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
              turpis libero sagittis suspendisse. Velit fringilla a. A lorem
              ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
              magnis sodales mauris pede. Quo venenatis volutpat aliquam ut
              libero. Dui urna pede velit...
            </p>
            <div className="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>January 15, 2023</p>
              <i class="fa-solid fa-briefcase"></i>
              <p>Adventure, Travel</p>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="b-img">
            <img src={blogIMG4} alt="" />
          </div>
          <div className="b-details">
            <h2>
              10 Common Questions about Solo Female Travel and How to Always
              Stay Safe
            </h2>
            <p>
              Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
              turpis libero sagittis suspendisse. Velit fringilla a. A lorem
              ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
              magnis sodales mauris pede. Quo venenatis volutpat aliquam ut
              libero. Dui urna pede velit...
            </p>
            <div className="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>October 25, 2023</p>
              <i class="fa-solid fa-briefcase"></i>
              <p>Exotic, Cruises</p>
            </div>
          </div>
        </div>

        <div className="next-prev">
          <i class="fa-solid fa-arrow-left"></i>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Blog;
