import React, { Component } from 'react';
import { mapKey } from './../../apiKeys';
import MapComponent from '../../components/MapComponent/MapComponent';

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  toggleShowing = (fireInfo) => {
    this.props.toggleShowing(fireInfo);
  };

  containerElement = () => (<div className="availableRidesMap"/>);
  
  loadingElement = () => (<div style={{ height: `100%` }}/>);
  mapElement = () => (<div style={{ height: `100%` }} />);

  render() {
    return (
      <div className="map-container">
        {
          this.props.currentLocation.lat ? 
            <MapComponent
              position={this.props.currentLocation}
              googleMapURL={mapUrl}
              // fires={this.props.fires}
              markerCoords={this.props.fireLocations}
              toggleShowing={this.toggleShowing}
              loadingElement={this.loadingElement()}
              containerElement={this.containerElement()}
              mapElement={this.mapElement()} /> :
            <div className="map-instructions">
              <h4 className="map-text">
                Input your current address to find pickup pickup
                locations near you
              </h4>
            </div>
        }
      </div>
    );
  }
}

export default MapContainer;