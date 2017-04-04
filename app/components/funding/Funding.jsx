import React from 'react';
import { Link } from 'react-router';
class Funding extends React.Component{
	constructor(props){
		 super(props);
		  this.state = {};
		  this.state.padding="50px";	
	}
	render(){
		return (              
              	   <div  id="funding_container" className="funding_container" style={{ 'padding-top': this.state.padding }}>
		            <h1>
		              <img src="static/images/fund.png"/>
		            </h1>
		         </div>
			)
	}
}

export default Funding;