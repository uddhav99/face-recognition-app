import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation.js';
import Logo from './components/Logo/logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apiKey: '6d2fa176ba7a4a4aa2894321676216ef'
 });

const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }


  onInputChange = (event) => {

  }

  onButtonSubmit = () => {

  }

  render () {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
