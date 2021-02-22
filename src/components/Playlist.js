import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import token from "./Token";

function Playlist(props) {
  let [categories, setCategories] = useState([]);
  let [category, setCategory] = useState("");
  let [playlists, setPlaylists] = useState([]);
  let [tracks, setTracks] = useState([]);
  let [allTracks, setAllTracks] = useState([]);
  let [randomPlaylist, setRandomPlaylist] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    fetch(`https://api.spotify.com/v1/browse/categories?limit=50`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${await token()}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetching categories data...", data);
        setCategories(data.categories.items);
      });
  }

  async function getPlaylists(category_id) {
    setCategory(category_id);
    fetch(
      `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${await token()}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          `Fetching the ${category_id.toUpperCase()} category playlists...`,
          data.playlists
        );
        setPlaylists(data.playlists.items);
        data.playlists.items.map(async (eachPlaylist) => {
          fetch(
            `https://api.spotify.com/v1/playlists/${eachPlaylist.id}/tracks`,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${await token()}`,
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(
                `Fetching the ${eachPlaylist.name.toUpperCase()} playlist tracks...`,
                data.items
              );
              setAllTracks(...tracks, data.items);
              setRandomPlaylist(data.items);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }

  const showCategories = () => {
    return categories.map((eachCat) => {
      return (
        <button onClick={() => getPlaylists(eachCat.id)}>{eachCat.name}</button>
      );
    });
  };

  let randomInt;

  const showPlaylist = () => {
    return randomPlaylist.map((eachPlaylist) => {
      randomInt = getRandomInt(randomPlaylist.length);
      for (let i = 0; i < 35; i++) {
        if (randomPlaylist[randomInt]?.track.preview_url) {
          return (
            <div className="music-tile">
              <img src={randomPlaylist[randomInt]?.track.album.images[0].url} />
              <h3>{randomPlaylist[randomInt]?.track.name}</h3>
              <audio controls>
                <source
                  src={randomPlaylist[randomInt]?.track.preview_url}
                  type="audio/mpeg"
                />
              </audio>
            </div>
          );
        }
      }
    });
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div>
      <div className="margin">
        <h1>Choose a genre for your new playlist!</h1>
        <div className="buttons-panel">{showCategories()}</div>
      </div>

      <div>
        <h2 className="margin">Welcome to your custom playlist...</h2>
        <div className="playlist-panel">{showPlaylist()}</div>
      </div>

      <div className="buttons-row margin">
        <Link to="/">
          <button>Return: Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Playlist;
