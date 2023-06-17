import React from "react";
import "./reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from '../../images/R1.jpg'

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1>Top Reviews</h1>
      <div className="reviews">
        <Slider {...settings}>
          <div className="review">
            <h2>Miami Beaches</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              I cannot speak highly enough about our 3 week trip to this place
              and the services provided by this travel company. Everything was
              seamless. The private guides were interesting and knowledgable.
            </p>
            <div className="person">
              <div className="p-image">
                <img src={r1} alt="" />
              </div>
              <h3>Abdirino</h3>
            </div>
          </div>
          <div className="review">
            <h2>Colorful India</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              I cannot speak highly enough about our 3 week trip to this place
              and the services provided by this travel company. Everything was
              seamless. The private guides were interesting and knowledgable.
            </p>
            <div className="person">
              <div className="p-image">
                <img src={r1} alt="" />
              </div>
              <h3>Abdirino</h3>
            </div>
          </div>
          <div className="review">
            <h2>Yangshuo Mist</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              I cannot speak highly enough about our 3 week trip to this place
              and the services provided by this travel company. Everything was
              seamless. The private guides were interesting and knowledgable.
            </p>
            <div className="person">
              <div className="p-image">
                <img src={r1} alt="" />
              </div>
              <h3>Abdirino</h3>
            </div>
          </div>
          <div className="review">
            <h2>Amazon Forest</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              I cannot speak highly enough about our 3 week trip to this place
              and the services provided by this travel company. Everything was
              seamless. The private guides were interesting and knowledgable.
            </p>
            <div className="person">
              <div className="p-image">
                <img src={r1} alt="" />
              </div>
              <h3>Abdirino</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
