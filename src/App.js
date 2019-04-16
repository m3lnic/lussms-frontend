import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Societies from './Components/Societies/Societies'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Societies/>
      </div>
    );
  }
}

export default App;