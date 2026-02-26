import React from "react";
import "./Gallery.css";

import drawing1 from "../assets/images/drawing1.jpg";
import drawing2 from "../assets/images/drawing2.jpg";
import drawing3 from "../assets/images/drawing3.jpg";

function Drawings() {
  return (
    <div className="gallery">
      <h1>Drawings</h1>

      <div className="gallery-grid">
        <div className="card">
          <img src={drawing1} alt="Drawing 1" />
          <p>Pencil Sketch</p>
        </div>

        <div className="card">
          <img src={drawing2} alt="Drawing 2" />
          <p>Charcoal Art</p>
        </div>

        <div className="card">
          <img src={drawing3} alt="Drawing 3" />
          <p>Line Drawing</p>
        </div>
      </div>
    </div>
  );
}

export default Drawings;