
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import './MapComponent.css'

export const MapComponent = withScriptjs(withGoogleMap((
  { position, markerCoords, toggleShowing, ...props }
) => {
  const markers = markerCoords.map((location, index) => {
    let { lat, lng } = location;
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    return (
      <Marker
        key={`mapmarker-${index}`}
        onClick={() => toggleShowing(location)}
        position={{lat: lat, lng: lng}}>
        {
          location.isShowing === true && 
          <InfoBox
            options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <div className="info-box">
              <div className="info-text-box">
                {/* <h2>{what we want to display in info box}</h2> */}
              </div>
            </div>
          </InfoBox>
        }
      </Marker>
    );
  });
  return (
    <GoogleMap
      defaultZoom={4}
      center={position}>
      {markers}
    </GoogleMap>
  );
}));

export default MapComponent;