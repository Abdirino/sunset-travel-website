import "./TripStyle.css";

function TripData(props) {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img alt="recent destinations" src={props.image} />
        </div>
        <h3>{props.heading}</h3>
        <h4>{props.price}</h4>
        <p>{props.text}</p>
      <button>{props.book}</button>
      </div>
    </>
  );
}

export default TripData;
