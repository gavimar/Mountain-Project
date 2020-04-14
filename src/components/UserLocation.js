
import React, { useState } from 'react';
import Geoloc from './GeoLoc'

const UserLocation= (props) =>{
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  console.log(props.coords && props.coords.latitude)
  console.log(props.coords && props.coords.longitude)

  const handleCoordinates =() =>{
    handleLong();
    handleLat();
  }

  const handleLong = () => {
    setLong(props.coords && props.coords.longitude);
    
  }
  
  const handleLat = () => {
    setLat(props.coords && props.coords.latitude);
    
  }


  return (
    <header className="header">
      <h1>Climbing Routes Finder</h1>
      <button type="button" onClick={handleCoordinates}>Find closest</button>
        
        <p>{props.coords && props.coords.latitude}</p>
        <Geoloc {...props}
        longitude ={long}
        latitude = {lat} />
      
      <p className="coordinates"></p>
    </header>
  )
}




export default UserLocation; 
