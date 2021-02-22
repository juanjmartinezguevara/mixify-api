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
          <h2>How It Works</h2>
          <p>
            The goal of Mixify is to produce new playlists instantly based on a particular music genre. With that end in mind, Mixify begins by asking you for a desired genre for your new playlist. After that, Mixify pulls the most relevant songs in a particular genre and randomly produces a new playlist for your enjoyment. Just hit "Get Started" to begin!
          </p>
        </div>
      </div>
      <div className='buttons-row' id='buttons-row-1'>
        <Link to="/playlist">
          <button>Get Started!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
