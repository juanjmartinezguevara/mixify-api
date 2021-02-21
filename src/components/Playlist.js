import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import token from "./Token";

function Playlist(props) {
  let [categories, setCategories] = useState([""]);
  let [category, setCategory] = useState("");
  let [playlists, setPlaylists] = useState([]);
  let [tracks, setTracks] = useState([]);
  let [allTracks, setAllTracks] = useState([]);

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
        console.log(`Fetching the ${category_id.toUpperCase()} category playlists...`, data.playlists);
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
              console.log(`Fetching the ${eachPlaylist.name.toUpperCase()} playlist tracks...`, data.items);
              setAllTracks(...tracks, data.items);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }

  //   async function getTracks(playlist_id) {
  //     fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${await token()}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("tracks", data.items);
  //         setTracks(data.items);
  //       });
  //   }

  const showCategories = () => {
    return categories.map((eachCat) => {
      return <li onClick={() => getPlaylists(eachCat.id)}>{eachCat.name}</li>;
    });
  };

  //   const showPlaylist = () => {
  //     return playlists.map((eachPlaylist) => {
  //       return (
  //         <li onClick={() => getTracks(eachPlaylist.id)}>
  //           {eachPlaylist.name}
  //         </li>
  //       );
  //     });
  //   };

  //   const showTracks = () => {
  //     return tracks.map((eachTrack) => {
  //       if (eachTrack.track.preview_url) {
  //         return (
  //           <li>
  //             {eachTrack.track.preview_url}
  //             <audio controls>
  //               <source src={eachTrack.track.preview_url} type="audio/mpeg" />
  //             </audio>
  //           </li>
  //         );
  //       }
  //     });
  //   };
  let playlist = []
  function random(arrLength) {

  }

  const makePlaylist = () => {
    getPlaylists('chill');
    tracks.map(each => {
    playlist.push(each)
        return (
            <li>
              {each.name}
              <audio controls>
                <source src={each.preview_url} type="audio/mpeg" />
              </audio>
            </li>
          );
    });
  }

  return (
    <div>
      <div>
        <h1>Genres</h1>
        <button onClick={makePlaylist}>Chill</button>
      </div>

      {/* TRACKS
      <ul>{showTracks()}</ul>
      PLAYLIST
      <ul>{showPlaylist()}</ul> */}
      <h1>Categories</h1>
      <ul>{showCategories()}</ul>
      <div className="buttons-row">
        <Link to="/attractions">
          <button>Previous: Attractions</button>
        </Link>
        <Link to="/myexperience">
          <button>Finish Up: My Experience</button>
        </Link>
      </div>
    </div>
  );
}

export default Playlist;
