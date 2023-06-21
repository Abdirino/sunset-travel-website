import TripData from "./TripData";
import "./TripStyle.css";

import egypt from "../images/Egypt.jpg";
import france from "../images/France.jpg";
import india from "../images/India.jpg";
import Australia from "../images/Australia.jpg";
import Sweden from "../images/Sweden.jpg";
import Spain from "../images/Spain.jpg";
import Germany from "../images/Germany.jpg";
import USA from "../images/USA.jpg";
import Brazil from "../images/Brazil.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function Trip() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2200,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="trips">
      <div className="trip">
        <h1>Recent Tours</h1>
        <p>Showing you the world, one country at a time</p>

        <div className="trip-card">
          <Slider {...settings}>
            <div>
              <TripData
                image={egypt}
                heading="Egypt"
                price="$600"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={france}
                heading="France"
                price="$1200"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={india}
                heading="India"
                price="$2200"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={Australia}
                heading="Australia"
                price="$1300"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={Sweden}
                heading="Sweden"
                price="$1400"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={Spain}
                heading="Spain"
                price="$1900"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={Germany}
                heading="Germany"
                price="$800"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={USA}
                heading="USA"
                price="$1100"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={Brazil}
                heading="Brazil"
                price="$1700"
                text="Lorem ipsum dolor sit amet mattis. Class ante erat. Dapibus ipsum
                turpis libero sagittis suspendisse. Velit fringilla a. A lorem
                ipsum vel urna aptent. Consectetuer urna ante elementum maecenas
                magnis velit..."
                book="Book Now!"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Trip;
