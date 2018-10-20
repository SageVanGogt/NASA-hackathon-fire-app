import React, { Component } from 'react';

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      image: null
    }
  }

  updateImage = () => {
    
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