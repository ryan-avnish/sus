import React from 'react';
import Header from './Header.jsx';
import ExcellenceHeader from './ExcellenceHeader.jsx';
import Footer from './Footer.jsx';
import ExcellenceFooter from './ExcellenceFooter.jsx';

class Template extends React.Component {
    constructor(props) {
       super(props);
    }

	render() {
  return (
        <div className="page-bottom mainBody" data-custom={this.props.location.pathname}>
          {
             
            this.props.location.pathname == '/excellence' || this.props.location.pathname == '/improvement' || this.props.location.pathname == '/funding' ? <ExcellenceHeader/> : <Header/>}
          { this.props.children }
          {this.props.location.pathname == '/excellence' || this.props.location.pathname == '/improvement' || this.props.location.pathname == '/funding' ? <ExcellenceFooter/> : <Footer/>}
        </div>
		);
	}
}

export default Template;
