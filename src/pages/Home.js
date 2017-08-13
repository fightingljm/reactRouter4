import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HomePages</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home;
