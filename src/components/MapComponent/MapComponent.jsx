
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

export const MapComponent = () => {


  return (
    <GoogleMap
      defaultZoom={16}
      center={position}>
      {markers}
    </GoogleMap>
  );
};

export default MapComponent;