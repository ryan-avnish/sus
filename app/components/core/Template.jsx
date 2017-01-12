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
        <div className="page-bottom mainBody">
          {this.props.location.pathname == '/excellence' ? <ExcellenceHeader/> : <Header/>}
          { this.props.children }
          {this.props.location.pathname == '/excellence' ? <ExcellenceFooter/> : <Footer/>}
        </div>
		);
	}
}

export default Template;
