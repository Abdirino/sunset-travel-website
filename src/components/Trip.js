import TripData from "./TripData";
import "./TripStyle.css";
import egypt from "../images/Egypt.jpg";
import france from "../images/France.jpg";
import india from "../images/India.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trip() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="trips">
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>Showing you the world, one country at a time</p>

        <div className="trip-card">
          <TripData
            image={egypt}
            heading="Egypt"
            price="$1200"
            text="Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx."
            book="Book Now!"
          />
          <TripData
            image={france}
            heading="France"
            price="$900"
            text="France, in Western Europe, encompasses alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
            book="Book Now!"
          />
          <TripData
            image={india}
            heading="India"
            price="$1600"
            text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
            book="Book Now!"
          />
          <TripData
            image={india}
            heading="India"
            price="$1600"
            text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
            book="Book Now!"
          />
          <TripData
            image={india}
            heading="India"
            price="$1600"
            text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
            book="Book Now!"
          />
          <TripData
            image={india}
            heading="India"
            price="$1600"
            text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
            book="Book Now!"
          />
        </div>
      </div>
    </div>
  );
}

export default Trip;
