import React from 'react';
import './Gallery.css';

import Gimg from '../../images/BlogIMG2.jpg';
import Gimg2 from '../../images/Brazil.jpg';
import Gimg3 from '../../images/Sweden.jpg';

const Gallery = () => {
  return (
    <>
      <div className="g-head">
        <h2>From Our Gallery</h2>
      </div>
      <div className="gallery">
        <div className="g-img">
          <img src={Gimg} alt="" />
        </div>
        <div className="g-img">
          <img src={Gimg2} alt="" />
        </div>
        <div className="g-img">
          <img src={Gimg3} alt="" />
        </div>
      </div>
    </>
  )
}

export default Gallery