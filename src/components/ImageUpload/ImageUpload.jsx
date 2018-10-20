import React, { Component } from 'react';
import EXIF from 'exif-js';

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      lat: null,
      lng: null
    }
  }


  updateImage = (event) => {
    const image = event.target.files[0]
    EXIF.getData(image, function()   {
      const lat = EXIF.getTag(this, "GPSLatitude");
      const lng = EXIF.getTag(this, "GPSLongitude");
      console.log(lat)
      console.log(lng)
    })
  }

  render() {
    return (
      <div className="App">
        <form action="submit">
          <input 
            type="file" 
            accept="image/*" 
            onChange={this.updateImage}/>
        </form>
      </div>
    );
  }
}

export default ImageUpload