import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Destinations(props) {


  return (
    <div>
      <h1>Step 1: Destinations</h1>
      <div className="buttons-row">
        <Link to="/">
          <button>Previous: Home</button>
        </Link>
        <Link to="/attractions">
          <button>Next: Attractions</button>
        </Link>
      </div>
    </div>
  );
}

export default Destinations;
