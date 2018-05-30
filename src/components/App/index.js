import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home';
import Contacts from '../Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
