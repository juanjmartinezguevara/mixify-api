import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import token from './Token'

function Playlist(props) {
  let [categories, setCategories] = useState([""]);
  let [category, setCategory] = useState('');
  let [playlists, setPlaylists] = useState([]);
  let [tracks, setTracks] = useState([]);

  useEffect(() => {
    getSpotifyData();
   }, []);
   async function getSpotifyData() {
     fetch(`https://api.spotify.com/v1/browse/categories?limit=50`, {
       headers: {
         Accept: 'application/json',
         Authorization: `Bearer ${await token()}`,
         'Content-Type': 'application/json'
       }
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setCategories(data.categories.items);
       });
   }

   async function getCategoryData(category_id) {
    setCategory(category_id)
    fetch(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${await token()}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.playlists);
        setPlaylists(data.playlists.items);
      });
  }
//https://api.spotify.com/v1/browse/categories/37i9dQZF1DWUa8ZRTfalHk/tracks
  async function getTrackData(playlist_id) {
    fetch(`	https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${await token()}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('pumpkin',data, data.items);
        setTracks(data.items);
      });
  }

   const ShowCategories = () => {
       return categories.map(eachCat => {
           return (
               <li onClick={() => getCategoryData(eachCat.id)}>
                   {eachCat.name}
               </li>
           )
       })
   }

   const ShowPlaylist = () => {
       return playlists.map(eachPlaylist => {
           return (
               <li onClick={() => getTrackData(eachPlaylist.id)}>
                   {eachPlaylist.name}
               </li>
           )
       })
   }

   const ShowTracks = () => {
    console.log(tracks)
    return tracks.map(eachTrack => {
        if(eachTrack.track.preview_url){
        return (
            <li>
                {eachTrack.track.preview_url}
                    <audio controls>
                    <source src={eachTrack.track.preview_url} type="audio/mpeg"/>
                    </audio>
            </li>
        )
        }
    })
}

  return (
    <div>
      <h1>Step 3: Playlist</h1>
      <form name="cars" id="cars" multiple>
        <ul className="multiple-choice">
          <h3>
            Now that you've got your itinerary, what vibe are you going for?
          </h3>

          <div>
            <input type="radio" value="A" />
            <label>Party</label>
          </div>

          <div>
            <input type="radio" value="B" />
            <label>Relaxing</label>
          </div>

          <div>
            <input type="radio" value="C" />
            <label>Wholesome</label>
          </div>

          <div>
            <input type="radio" value="D" />
            <label>Introspective</label>
          </div>
        </ul>
      </form>
      <h1>{category}</h1>
      tracks
      <ul>
          {ShowTracks()}
      </ul>
      PLAYLIST
      <ul>
      {ShowPlaylist()}
      </ul>
      CATEGORIES
      <ul>
      {ShowCategories()}
      </ul>
      <div className='buttons-row'>
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
