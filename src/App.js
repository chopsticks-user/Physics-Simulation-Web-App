import React from 'react'
import Header from "./components/Header"
import WorkSpace from './components/WorkSpace';

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Header/>
        <WorkSpace/>
      </div>
    );
  }
}

export default App;
