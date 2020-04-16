
import React, { useState, useEffect } from 'react';
import Geoloc from './GeoLoc'

const UserLocation= (props) =>{
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [search, setSearch] = useState(false);
  // const[data,setData] = useState([]);
  const [data, setData] = useState({});
  const  [hasError, setErrors] =  useState(false);

  console.log(props.coords && props.coords.latitude)
  console.log(props.coords && props.coords.longitude)

  const handleCoordinates =() =>{
    handleLong();
    handleLat();
    handleSearch();
  }

  const handleLong = () => {
    setLong(props.coords && props.coords.longitude);
    
  }
  
  const handleLat = () => {
    setLat(props.coords && props.coords.latitude);
    
  }

  const handleSearch =() =>{
    setSearch(!search);
  }

  useEffect (() =>{
      fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`)
      .then(res => res.json())
      .then(data => setData(data.routes))
      .catch(() => setErrors(true));
      console.log(res.routes);

  }, []);



  // const fetchRoutes = () => {
  //   fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${long}&maxDistance=100&minD`).then(response => response.json())
  //   .then(response => response.json())
  //     .then(data => {
  //       setData(data.routes)
  //       console.log(data.routes)
  //     });
  // }


  return (
    <header className="header">
      <h1>Climbing Routes Finder</h1>
      <button type="button" onClick={handleCoordinates}>Find closest</button>
        
        <p>{props.coords && props.coords.latitude}</p>
        <Geoloc {...props}
        longitude ={long}
        latitude = {lat} />
      
  <ul className="show-search">
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    </header>
  )
}




export default UserLocation; 
