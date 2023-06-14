import TripData from "./TripData";
import "./TripStyle.css";
import egypt from "../images/Egypt.jpg";
import france from "../images/France.jpg";
import india from "../images/India.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trip() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="trips">
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>Showing you the world, one country at a time</p>

        <div className="trip-card">
          <Slider {...settings}>
            <div>
              <TripData
                image={egypt}
                heading="Egypt"
                price="$1200"
                text="Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={france}
                heading="France"
                price="$900"
                text="France, in Western Europe, encompasses alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={india}
                heading="India"
                price="$1600"
                text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={india}
                heading="India"
                price="$1600"
                text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={egypt}
                heading="Egypt"
                price="$1200"
                text="Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={france}
                heading="France"
                price="$900"
                text="France, in Western Europe, encompasses alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={egypt}
                heading="Egypt"
                price="$1200"
                text="Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={france}
                heading="France"
                price="$900"
                text="France, in Western Europe, encompasses alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
                book="Book Now!"
              />
            </div>
            <div>
              <TripData
                image={india}
                heading="India"
                price="$1600"
                text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
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
