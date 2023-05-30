import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import pisa1 from "../images/Tower-of-Pisa 1.jpg";
import pisa2 from "../images/Tower-of-Pisa 2.jpg";
import sydney1 from "../images/Sydney-opera-House 1.jpg";
import sydney2 from "../images/Sydney-opera-House 2.jpg";
import greatWall1 from "../images/Great-wall 1.jpg";
import greatWall2 from "../images/Great-wall 2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>The Whole World Awaits</p>

      <DestinationData
        className="first-D"
        heading="Leaning Tower of Pisa, Italy"
        text="The Leaning Tower of Pisa is one of Italy’s major tourist
      attractions. The freestanding bell tower of the Pisa Cathedral was
      built over almost two hundred years and was finished in 1399. The
      original hight of the tower was 60 meters/196ft, but as it is
      leaning, the lowest side is now less than 56 meters/184ft."
        img1={pisa1}
        img2={pisa2}
      />

      <DestinationData
        className="first-D-reverse"
        heading="Sydney Opera House, Australia"
        text="The Sydney Opera House, built in Australia’s biggest city, is famous for its roof’s architecture resembling shells or sails. The opera house was designed by Jørn Utzon from Denmark and it was built between 1959 and 1973. The opera house has several performance halls and theatre and exhibition spaces."
        img1={sydney1}
        img2={sydney2}
      />

      <DestinationData
        className="first-D"
        heading="Great Wall of China"
        text="﻿The Great Wall is one of the seven wonders of the world. It runs in sections over a very long distance across China.The wall is also referred to as ‘Long Wall’ as it is over 21,196 km/13,171 miles long. It was built with stones, bricks and tiles, earth as well as of wooden material. The wall was completed in 1644, but it took more than 2,000 years to build."
        img1={greatWall1}
        img2={greatWall2}
      />
    </div>
  );
};

export default Destination;
