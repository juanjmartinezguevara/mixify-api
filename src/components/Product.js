import React from 'react';
import {Link} from 'react-router-dom';

function Product(props) {
    return (
        <div>
        <h1>Final Step: Make It Happen!</h1>
            <Link to="/"><button>Plan Another Experience!</button></Link>
        </div>
    );
}

export default Product;