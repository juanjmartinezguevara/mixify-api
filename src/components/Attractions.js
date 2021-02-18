import React from 'react';
import {Link} from 'react-router-dom';

function Attractions(props) {
    return (
        <div>
            <h1>Step 2: Attractions</h1>
            <div className='buttons-row'>
            <Link to='/destinations'><button>Previous: Destination</button></Link>
            <Link to='/playlist'><button>Next: Playlist</button></Link>
            </div>
        </div>
    );
}

export default Attractions;