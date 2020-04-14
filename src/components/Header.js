import React from 'react';
// import GetLocate from '../services/GeoLocate'
import ReactDOM from 'react-dom';


import Geoloc from './GeoLoc'

const Header= (props) =>{

  return (
    <header className="header">
      <h1>Climbing Routes Finder</h1>
      <button type="button" >Find closest</button>
        
        <p>{props.coords && props.coords.latitude}</p>
        <Geoloc {...props} />
      
      <p className="coordinates"></p>
    </header>
  )
}




export default Header; 
