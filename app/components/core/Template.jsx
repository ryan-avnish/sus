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
       this.getPath = this.getPath.bind(this);
    }
   getPath(){
    return (this.props.location.pathname.substr(1)=="")?'home':this.props.location.pathname.substr(1);
   }
	
  render() {
            if(this.props.location.pathname == '/excellence' || this.props.location.pathname == '/improvement' || this.props.location.pathname == '/funding'){
               return(
                          <div className="page-bottom mainBody"  id={this.getPath()}>
                            <ExcellenceHeader/>
                            { this.props.children }
                            <ExcellenceFooter/>
                          </div>
                )
            }
            else if(this.props.location.pathname == '/glance'){
                   return(
                            <div className="page-bottom mainBody"  id="glanceBody" >
                            <GlanceHeader/> 
                            { this.props.children }
                            <GlanceFooter/>
                            </div>
                       )
            }
            else{
                  return (
                             <div className="page-bottom mainBody"  id={this.getPath()}>
                             <Header/> 
                             { this.props.children }
                             <Footer/>
                             </div>
                    )
            }
 
  }
}

export default Template;
