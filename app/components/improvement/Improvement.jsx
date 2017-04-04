import React from 'react';
import { Link } from 'react-router';
class Improvement extends React.Component{
	constructor(props){
		 super(props);	
		 this.state = {};
		 this.state.padding="50px";	
	}
	
	render(){
		return (              
              	 <div id="improvement_container" className="improvement_container" style={{ 'padding-top': this.state.padding }} > 
		            <h1>
		              <img src="static/images/u23.png"/>
		            </h1>
		         </div>
			)
	}
}

export default Improvement;