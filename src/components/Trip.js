import TripData from "./TripData";
import "./TripStyle.css";
import egypt from "../images/Egypt.jpg";
import france from "../images/France.jpg";
import india from "../images/India.jpg";

function Trip() {
  return (
    <div className="trips">
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>Showing you the world, one country at a time</p>

        <div className="trip-card">
          <TripData
            image={egypt}
            heading="Egypt"
            text="Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple and Valley of the Kings tombs."
          />

          <TripData
            image={france}
            heading="France"
            text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
          />

          <TripData
            image={india}
            heading="India"
            text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Known for her rich culture and tasty food."
          />
        </div>
      </div>
    </div>
  );
}

export default Trip;
