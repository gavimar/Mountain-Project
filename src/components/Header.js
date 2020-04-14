import React from 'react';
import UserLocation from './UserLocation'

import {geolocated} from 'react-geolocated';

const header = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(UserLocation);


export default header;
