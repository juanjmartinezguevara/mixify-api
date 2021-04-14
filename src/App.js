import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/playlist' render={(props) => <Playlist {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
