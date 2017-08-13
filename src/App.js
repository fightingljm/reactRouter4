import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import About from './pages/About.js'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
