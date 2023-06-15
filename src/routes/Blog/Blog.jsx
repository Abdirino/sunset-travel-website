import React from "react";
import "./blog.css";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer";
import blogHero from "../../images/Sydney-opera-House 1.jpg";
import Hero from "../../components/Hero";

import blogIMG1 from '../../images/BlogImg1.jpg'

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImage={blogHero} title="Blog" />

      <div className="blogs">
        <div className="blog">
            <div className="b-img">
                <img src={blogIMG1} alt="" />
            </div>
            <div className="b-details"></div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Blog;
