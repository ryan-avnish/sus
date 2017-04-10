import React from 'react';
import Header from './Header.jsx';
import GlanceHeader from './GlanceHeader.jsx';
import ExcellenceHeader from './ExcellenceHeader.jsx';
import Footer from './Footer.jsx';
import ExcellenceFooter from './ExcellenceFooter.jsx';
import GlanceFooter from './GlanceFooter.jsx';
class Template extends React.Component {
    constructor(props) {
       super(props);
    }

	
  render() {
            if(this.props.location.pathname == '/excellence' || this.props.location.pathname == '/improvement' || this.props.location.pathname == '/funding'){
               return(
                          <div className="page-bottom mainBody" data-custom={this.props.location.pathname}>
                            <ExcellenceHeader/>
                            { this.props.children }
                            <ExcellenceFooter/>
                          </div>
                )
            }
            else if(this.props.location.pathname == '/glance'){
                   return(
                            <div className="page-bottom mainBody" data-custom={this.props.location.pathname}>
                            <GlanceHeader/> 
                            { this.props.children }
                            <GlanceFooter/>
                            </div>
                       )
            }
            else{
                  return (
                             <div className="page-bottom mainBody" data-custom={this.props.location.pathname}>
                             <Header/> 
                             { this.props.children }
                             <Footer/>
                             </div>
                    )
            }
 
  }
}

export default Template;
