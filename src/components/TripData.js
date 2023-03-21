import "./TripStyle.css";

function TripData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img alt="recent destinations" src={props.image}/>
            </div>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData;