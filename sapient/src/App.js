import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';









class App extends Component {
  render() {
    return (
      <div className="Axium">
        <div className="App-header">
          <img src="axiom-logo-main.png" className="Axiumlogo" alt="logo"/>
            <div className="searchbox">
              <input/>
            </div>
            <div className="socialtop">
              <a href="https://twitter.com/"><img src="twitter-icon.png"/></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://www.facebook.com/"><img src="fb-icon.png"/></a>
            </div>
        </div>
      <div>
          <div className="menuContainer">
            <select>
              <option value="volvo">Camping</option>
              <option value="saab">Gear</option>
              <option value="saab">Encampments</option>
            </select>
             <select>
               <option value="volvo">Clothing</option>
               <option value="saab">Warm Apparel</option>
               <option value="saab">Water Proof Apparel</option>
            </select>
             <select>
               <option value="volvo">Fishing</option>
               <option value="saab">Fishing Poles</option>
               <option value="saab">Bait & Tackle</option>
            </select>
            <select>
               <option value="volvo">Hiking</option>
               <option value="saab">Footwear</option>
               <option value="saab">Socks</option>
            </select>
             <select>
               <option value="volvo">Biking</option>
               <option value="saab">Helmets</option>
               <option value="saab">Bikes</option>
            </select>
          </div>
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

        <div className="footersection">
        <a href="https://twitter.com/"><img src="twitter-icon.png"/></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="https://www.facebook.com/"><img src="fb-icon.png"/></a>
        </div>


      </div>
    );
  }
}

export default App;
