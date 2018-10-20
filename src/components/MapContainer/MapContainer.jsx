import React, { Component } from 'react';
import { mapKey } from './../../apiKeys';
import MapComponent from '../../components/MapComponent/MapComponent';

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="map-container">
        
      </div>
    );
  }
}

export default MapContainer;