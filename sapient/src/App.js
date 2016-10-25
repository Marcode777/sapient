import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

var Toolbar = require('react-simple-toolbar');
var Region = Toolbar.Region

class App extends Component {
  render() {
    return (
      <div className="Axium">
        <div className="App-header">
          <img src="axiom-logo-main.png" className="Axiumlogo" alt="logo" />
        </div>

        <Toolbar>
          <Region>
            Export
          </Region>
 
          <Region flex={2}>
            <Toolbar>
              <Region align="center">Import from CSV</Region>
              <Region align="center">Import from Excel</Region>
            </Toolbar>
          </Region>
 
          <Region>
            Save
          </Region>
        </Toolbar>

        <div className="topsection">
          <img src="topsection-background.png" className="topsectionpic" alt="topsection"/>
        </div>  

      </div>
    );
  }
}

export default App;
