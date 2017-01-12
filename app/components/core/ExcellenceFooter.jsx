import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class ExcellenceFooter extends React.Component {
    constructor() {
      super();

    }

	render() {
  return (
    <footer className="footer bg-blue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 column">
                <div className="footer_text">
                     <h2></h2>   
                </div>
          </div> 
        </div>
      </div>
    </footer>
		);
	}

}

export default ExcellenceFooter;
