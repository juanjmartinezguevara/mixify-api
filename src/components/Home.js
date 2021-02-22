import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div id='homepage' className='main'>
      <div className="home-header">
        <h1>Welcome to Mixify!</h1>
        <p>
          Tired of having the same old playlists on replay? Do you want to mix it up and find something fresh to listen to? Then Mixify is just the tool you're looking for!
        </p>
      </div>
      <div className="home-row">
        <img
          className="img-prototype"
          alt="spotify prototype"
          src="https://cdn.dribbble.com/users/1343041/screenshots/5616971/spotify_dribble_1.gif"
        />
        <div id='home-paragraph'>
          <h2>Steps</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className='buttons-row' id='buttons-row-1'>
        <Link to="/playlist">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
