import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div id='homepage' className='main'>
      <div className="home-header">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="home-row">
        <img
          className="img-vacation"
          alt="Zion National Park"
          src="https://media.gettyimages.com/videos/zion-national-park-time-lapse-4k-naturewildlifeweather-video-id815525176?s=640x640"
        />
        <div id='home-paragraph'>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className='buttons-row' id='buttons-row-1'>
        <Link to="/destinations">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
