
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
const divStyle = {
  visibility: 'visible', 
  animationDelay: 0.3+'s', 
  animationName: 'fadeIn'
};

    return (      
      <header id="first">
        <div className="header-content">
           <div className="banner_nav">
                <ul>
                    <li><a href="#">Wiki</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div> 
           <div className="inner">
                <div className="number_list">
                    <ul>
                        <li><span>1</span><b> Explore</b></li>
                        <li><span>2</span><b> Discover</b></li>
                        <li><span>3</span><b> Analyze </b></li>
                        <li><span>4</span><b> Perform</b></li>
                    </ul>
                </div>

               
                <div className="taketourwrap">
                <a href="#video-background" id="toggleVideo" data-toggle="collapse" className="btn btn-primary btn-x2">Get started now</a> &nbsp; <a href="#one" className="btn btn-primary btn-x2 page-scroll">Take a tour 
                <b className="play"><img src="static/images/play.png"/></b></a>&nbsp;&nbsp;
                </div>

                <div className="social_icon">
                <p>Social Share :&nbsp; </p>
                <ul>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                </ul>
                </div>

                <div className="grid_wrap">
                    <Link to="/excellence">
                    <div className="grid_1" >                
                        <div className="gridcircle_1"><img src="static/images/grid_img1.png" data-wow-delay=".3s" style={divStyle} /></div>


                        <h2 className="btn-xl">Leaderboard</h2>
                        <div className="border_line"></div>

                        <p>Explore SUS institutions performance and funding ranking</p>

                    </div>
                    </Link>
                    <Link to="http://zgu8tz.axshare.com/#g=1&p=unf/" target="_blank">
                    <div className="grid_1">
                        <div className="gridcircle_2"><img src="static/images/grid_img2.png" data-wow-delay=".3s" style={divStyle} /></div>
                        
                        <h2 className="btn-xl">At.A.Glance</h2>
                        <div className="border_line"></div>
                        <p>View SUS metric detail and summary views for each institution</p>

                    </div>
                    </Link>
                    <div className="grid_1">
                        <div className="gridcircle_3"><img src="static/images/grid_img3.png" data-wow-delay=".3s"  style={divStyle} /></div>
                        
                        <h2 className="btn-xl"><a href="#">Analysis</a></h2>
                        <div className="border_line"></div>
                        <p>Create your own interactive analytic views from institution’s SUS metric data</p>
                    </div>
                </div>     
            </div>
        </div>
    </header>
    
  );
  }
  }

export default Home;
