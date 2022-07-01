import React from 'react'
import Header from "./components/Header.js"
import Plane from './components/Plane.js';

// function App() {
//   return (
//     <div className="container">
//       <Header/>
//       <Plane/>
//     </div>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title = "header"/>
        <Plane title = "plane"/>
      </div>
    );
  }
}

export default App;
