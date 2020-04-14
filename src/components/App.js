import React from 'react';

import '../stylesheets/App.scss';
import Header from './Header'
import Main from './Main'
import {geolocated} from 'react-geolocated';
// function App() {
//   return (
//     <div className="wrapper">
//       <Header/>
//       <Main/>
     
//     </div>
//   );
// }

const App = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Header);


export default App;
