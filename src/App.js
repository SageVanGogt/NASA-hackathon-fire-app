import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import ImageUpload from './components/ImageUpload/ImageUpload';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </div>
    );
  }
}

export default App;