import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Landing from './components/Landing';
import styled from 'styled-components';
import './App.css';
import ImageUpload from './components/ImageUpload/ImageUpload';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route path="/" component={Landing}/>
      </div>
    );
  }
}

export default App;