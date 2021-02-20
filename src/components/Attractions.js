import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/*

OpenTripMap - tourist attractions
    API --- https://opentripmap.io/docs#/Objects%20list/getListOfPlacesByLocation
    Key --- https://opentripmap.io/account/settings

*/

function Attractions(props) {
  let [places, setPlaces] = useState();

//   const options = {
//     credentials: 'include',
//     method: "GET",
//     url: "http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=5ae2e3f221c38a28845f05b66029fab11ec2dd4f02e8fe73f1bd6502",
//     headers: {
//       "x-rapidapi-key":
//         "5ae2e3f221c38a28845f05b66029fab11ec2dd4f02e8fe73f1bd6502",
// //       "x-rapidapi-host": "http://api.opentripmap.com/0.1/",
// //     },
// //   };

//   axios
//     .request(options)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });


const options = {
    method: 'GET',
    url: 'https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/xid/%7Bxid%7D',
    headers: {
      'x-rapidapi-key': '5ae2e3f221c38a28845f05b66029fab11ec2dd4f02e8fe73f1bd6502',
      'x-rapidapi-host': 'opentripmap-places-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

  return (
    <div>
      <h1>Step 2: Attractions</h1>
      <div className="buttons-row">
        <Link to="/destinations">
          <button>Previous: Destination</button>
        </Link>
        <Link to="/playlist">
          <button>Next: Playlist</button>
        </Link>
      </div>
    </div>
  );
}

export default Attractions;
