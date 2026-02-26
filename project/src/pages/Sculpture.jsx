import React from "react";
import "./Gallery.css";

import sculpture1 from "../assets/images/sculpture1.jpg";
import sculpture2 from "../assets/images/sculpture2.jpg";
import sculpture3 from "../assets/images/sculpture3.jpg";

function Sculpture() {
  return (
    <div className="gallery">
      <h1>Sculpture</h1>

      <div className="gallery-grid">
        <div className="card">
          <img src={sculpture1} alt="Sculpture 1" />
          <p>Modern Sculpture</p>
        </div>

        <div className="card">
          <img src={sculpture2} alt="Sculpture 2" />
          <p>Stone Art</p>
        </div>

        <div className="card">
          <img src={sculpture3} alt="Sculpture 3" />
          <p>Classic Statue</p>
        </div>
      </div>
    </div>
  );
}

export default Sculpture;