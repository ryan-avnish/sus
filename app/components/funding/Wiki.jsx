import React from 'react';
import {RouteHandler, Link, Route, Router,browserHistory } from 'react-router';
class Wiki extends React.Component{
	constructor(props){
		 super(props);
		  this.state = {};
		  this.state.padding="50px";
		
	}
	render(){
		return (     

              	   <div id="funding_container" className="funding_container" style={{ 'padding-top': this.state.padding }}>
		           <div style={{'margin':'30px 0 0 15px','color':'#000'}}>  <button className="btn btn-primary" onClick={browserHistory.goBack}>Back</button> </div> 
		            <h1>
		              <img className="wiki_static_image" src="static/images/suswiki.png"/>
		            </h1>
		         </div>
			)
	}
}

export default Wiki;