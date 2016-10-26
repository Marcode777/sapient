import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';





class App extends Component {
  render() {
    return (
      <div className="Axium">
        <div className="App-header">
          <img src="axiom-logo-main.png" className="Axiumlogo" alt="logo" />
        </div>

        <div id="menuContainer"></div>
          <div>
            <p>Menu Section</p>
            <p>Menu Section</p>
            <p>Menu Section</p>
          </div>



       

        <div className="topsection">
          <p>This is topsection.</p>
        </div> 

        <div className="middlesection">
          <p>This is middlesection.</p>
        </div>  

        <div className="bottomsection">
          <p>This is bottomsection.</p>
        </div>  


      </div>
    );
  }
}

export default App;
