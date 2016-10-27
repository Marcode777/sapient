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
              <form>
                <input type="text" placeholder="search" />
              </form>
            </div>
            <div className="socialtop">
              <a href="https://twitter.com/"><img src="twitter-icon.png" role="presentation" /></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://www.facebook.com/"><img src="fb-icon.png" role="presentation"/></a>
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
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Camping <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Gear</a></li>
                    <li><a href="#">Encampments</a></li>
                  </ul>
                </li>

                <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-img-url="tough-mojo-jacket-img.png"role="button" aria-haspopup="true" aria-expanded="false">Clothing<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                  <li><a data-toggle="modal" data-target="#myModal" href="#">CLICK THIS FOR JACKET</a></li>
                    <li><a href="#">Warm Apparel</a></li>
                    <li><a href="#">Water Proof Apparel</a></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Fishing <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Fishing Poles</a></li>
                    <li><a href="#"> Bait & Tackle</a></li>
                  </ul>
                </li>

              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Hiking <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Footwear</a></li>
                    <li><a href="#">Socks</a></li>
                  </ul>
              </li>

              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Biking <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#"> Helmets</a></li>
                    <li><a href="#"> Bikes</a></li>
                  </ul>
              </li>

              </ul>
      


    </div>
  </div>
</nav>
          </div>
        </div>






       

       

        <div className="topsection">
          <p>Axium offers the highest quality clothing for your apparel needs. Please use the menu above, click the clothing tab and "CLICK FOR THIS JACKET" to see an image of our Tough Mojo Jacket!</p>
        </div> 

        <div className="middlesection">
          <p>This is middlesection.</p>
        </div>  

        <div className="bottomsection">
          <p>This is bottomsection.</p>
          <li className="reviewLink"><a data-toggle="modal" data-target="#writeReview" href="#">PLEASE CLICK HERE TO WRITE A REVIEW</a></li>
        </div>  

        <div className="footersection">
        <a href="https://twitter.com/"><img src="twitter-icon.png" role="presentation"/></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="https://www.facebook.com/"><img src="fb-icon.png" role="presentation" /></a>
          <p>By Marco Sebello</p>
        </div>


        <div className="modal fade" tabIndex="-1"  data-toggle="modal" id="myModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">ToughMojoJacket</h4>
              </div>
              <div className="modal-body">
                <img src="tough-mojo-jacket-img1.png" role="presentation"/>
                <p> This is the Tough Mojo Jacket.</p>
                <li className="reviewLink"><a data-toggle="modal" data-target="#writeReview" href="#">WRITE A REVIEW OF THIS PRODUCT</a></li>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" tabIndex="-1"  data-toggle="modal" id="writeReview" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Please leave a review for your product here. Thanks!</h4>
              </div>
              <div className="modal-body">
                <p>Please leave a review here.</p>
                <div className="form">
                  <label>Review:</label>
                  <input type="text" class="form-control"/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Submit A Review</button>
              </div>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default App;


