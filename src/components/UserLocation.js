import React from 'react';
import Geoloc from './GeoLoc'

const UserLocation= (props) =>{

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




export default UserLocation; 
