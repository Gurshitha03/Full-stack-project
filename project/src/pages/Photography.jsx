import React from "react";
import "./Gallery.css";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";

function Photography() {
  return (
    <div className="gallery">
      <h1>Photography</h1>

      <div className="gallery-grid">
        <div className="card">
          <img src={photo1} alt="Photography 1" />
          <p>Nature Photography</p>
        </div>

        <div className="card">
          <img src={photo2} alt="Photography 2" />
          <p>Wildlife Photography</p>
        </div>

        <div className="card">
          <img src={photo3} alt="Photography 3" />
          <p>Portrait Photography</p>
        </div>
      </div>
    </div>
  );
}

export default Photography;