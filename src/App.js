import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Destinations from './components/Destinations';
import Attractions from './components/Attractions'
import Playlist from './components/Playlist';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/destinations' render={(props) => <Destinations {...props} />} />
        <Route exact path='/attractions' render={(props) => <Attractions {...props} />} />
        <Route exact path='/playlist' render={(props) => <Playlist {...props} />} />
        <Route exact path='/myexperience' render={(props) => <Product {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
