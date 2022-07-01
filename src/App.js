import React from 'react'
import Header from "./components/Header.js"
import Plane from './components/Plane.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Plane/>
      </div>
    );
  }
}

export default App;
