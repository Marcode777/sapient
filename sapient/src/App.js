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
<nav className="navbar navbar-default">
  <div className="container-fluid">
   
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mydropdown" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>

   
    <div className="collapse navbar-collapse" id="mydropdown">
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a data-toggle="modal" data-target="#myModal" href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
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
<div className="modal fade" tabindex="-1"  data-toggle="modal" id="myModal" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title">Modal title</h4>
      </div>
      <div className="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




      </div>
    );
  }
}

export default App;


