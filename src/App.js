import React, { Component } from 'react';
import Website from './components/Website';
import ParallaxLayers from './containers/ParallaxLayers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxLayers />
        <Website />
      </div>
    );
  }
}

export default App;
