import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Landing from './components/Landing';
import FireMap from './components/FireMap/FireMap';
import styled from 'styled-components';
import './App.css';
import ImageUpload from './components/ImageUpload/ImageUpload';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path="/" component={Landing} />
        <Route path='/fire-map' component={FireMap} />
      </div>
    );
  }
}

export default App;