import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class GlanceFooter extends React.Component {
    constructor() {
      super();

    }

  render() {
  return (
             <footer className="footer GlanceFooter">
        <div className="container-fluid">
            <div className="row">
                  
                  <div className="col-xs-12 col-sm-4 column white_bg">
                        <div className="logo_img">
                             <a href="#"><img src="static/images/university.png" /></a>   
                        </div>
                  </div> 
                  

                  <div className="col-xs-12 col-sm-8 column">
                        <div className="footer_logo">
                            <ul>
                                <li><a href="#"><img src="static/images/logo_1.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_2.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_3.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_4.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_5.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_6.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_7.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_8.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_9.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_10.png" /></a></li>
                                <li><a href="#"><img src="static/images/logo_11.png" /></a></li>

                            </ul>
                        </div>
                  </div> 
               
                
            </div>

        </div>
    </footer>
    );
  }

}

export default GlanceFooter;
