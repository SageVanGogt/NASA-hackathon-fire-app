import React, { Component } from 'react';
import { MapContainer } from '../MapContainer/MapContainer';

export class FireMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 39.747501199999995,
        lng: -104.9435811
      },
      fireLocations: [
        { lat: 39.847501199999995, lng: -104.9935811},
        { lat: 39.647501199999995, lng: -104.8435811}
      ]
    }
  }

  render() {
    return(
      <div>
        <MapContainer 
          currentLocation={this.state.currentLocation} 
          fireLocations={this.state.fireLocations}
        />
      </div>
    )
  }
}

export default FireMap;