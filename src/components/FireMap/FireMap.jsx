import React, { Component } from 'react';
import { MapContainer } from '../MapContainer/MapContainer';

export class FireMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 39.747501199999995,
        lng: -104.9435811
      }
    }
  }

  render() {
    return(
      <div>
        <MapContainer currentLocation={this.state.currentLocation}/>
      </div>
    )
  }
}

export default FireMap;