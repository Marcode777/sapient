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
          <div className="col-md-9">
            <ul>
              <li>
                <img src="tough-mojo-jacket-img2.png" className="jacket2" role="presentation"/>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <p>Our most insulated jacket to date, the city-styled Highline is designed to keep you warm during the deep freeze of winter.</p>
              </li>
            </ul>
          </div>
        </div>  

        <div className="bottomsection">
          <p className="reviews">Reviews</p>
            <ul>
              <li className="reviewLink"><a data-toggle="modal" data-target="#writeReview" href="#">WRITE A REVIEW ON THIS PRODUCT</a></li>
            </ul>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li>
                  <figure className="Shaun">
                    <img src="reviewer1.png" className="reviewer1" role="presentation"/>
                    <figcaption>Shaun White</figcaption>
                  </figure>
                </li>
              </ul>
            </div> 
            <div className="col-md-9">
              <ul>
                <li>
                  <p className="reviewer1">THIS THING IS AWESOME! I picked up this jacket for use in San Francisco and the surrounding Bay Area (Lake Tahoe included).</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
             <div className="col-md-3">
              <ul>
                <li>
                  <figure className="Jennie">
                    <img src="reviewer2.png" className="reviewer2" role="presentation"/>
                    <figcaption>Jennie Loren</figcaption>
                  </figure>
                </li>
              </ul>
            </div> 
            <div className="col-md-9">
              <ul>
                <li>
                  <p className="reviewer2">Loved this jacket so much from previous years I decided to buy a second in a different color. </p>
                </li>
              </ul>
            </div> 
          </div>
        </div> 


        
        <div className="footersection">
          <div className="col-md-12">
            <a href="https://twitter.com/" ><img src="twitter-icon.png" className="footers" role="presentation"/></a>
              &nbsp;
              &nbsp;
              &nbsp;
            <a href="https://www.facebook.com/"><img src="fb-icon.png" className="footers" role="presentation"/></a>
            <p className="tag">By Marco Sebello</p>
          </div>
        </div>



        <div className="modal fade" tabIndex="-1"  data-toggle="modal" id="myModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Clothing->ToughMojoJacket</h4>
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
                  <input type="text" className="form-control"/>
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


