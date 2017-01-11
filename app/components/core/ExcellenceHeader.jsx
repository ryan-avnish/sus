import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';
import UserStore from './../../stores/UserStore.jsx';

class ExcellenceHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.loggedIn = auth.loggedIn();
    this.state.userID = '';
    this.state.username = '';
    this.state.userID = auth.getUserId();
    this.state.username = auth.getUserName();
    this.navClick = this.navClick.bind(this);
    this.collapse = this.collapse.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
    this.router = context.router;
  }

  navClick() {
    this.setState({ expand:false });
  }

  collapse(expanded) {
    this.setState({ expand: expanded });
  }

  updateAuth(loggedIn, path) {
    this.setState({ loggedIn: loggedIn });
    this.setState({userID: auth.getUserId()});
    this.setState({username: auth.getUserName()});
    console.log(loggedIn);
    console.log(path);
    if (loggedIn && path == 'signin') {
      this.router.push('/');
    }
  }

  componentWillMount() {
    if(typeof window !== 'undefined') {
      var x = document.getElementsByTagName("BODY")[0];
      x.setAttribute("class", "newClass");
    }
    //auth.onChange = this.updateAuth;
  }

  render() {
    return (
      <div>
      <nav id="topNav" className="navbar navbar-default navbar-fixed-top bg-blue">
       
        <div className="row paddingheader">

        <div className="col-md-2 col-xs-2"><div id="mobile-nav"><img src="static/images/menu_icon_nw.png"/></div></div>
         <div className="col-md-5 ">  
             <div className="year">
                <div className="right">
                <i className="fa fa-caret-left custom-cart" aria-hidden="true"></i>
                <span> 2015 </span>
                <i className="fa fa-caret-right custom-cart" aria-hidden="true"></i>
                </div>

            </div>
              <div className="heading_text">
                  <h2>SUS Metrics Performance Excellence</h2>
              </div>  
        </div>
        <div className="col-md-5 pull-right">
            <div className="panel with-nav-tabs panel-default">
                <div className="panel-heading">
                    <ul className="nav nav-tabs" style={{display:'block'}}>
                        <li className="active"><a href="#tab1default" data-toggle="tab">Excellence</a></li>
                        <li><a href="#tab2default" data-toggle="tab">Improvement</a></li>
                        <li><a href="#tab3default" data-toggle="tab">Funding</a></li>
                    </ul>
                </div>
                
            </div>
        </div>          
     </div>

</nav>
<div id="navbx">
   <div className="heading"><Link to="/">Home</Link></div>
    <ul>
       <li>
          <a href="#"><img src="static/images/leader_icon.png"/> Leaderboards <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
          <ul>
            <li><a className="active" href="excellence_tab.html">Excellence</a></li>
            <li><a href="#">Improvement</a></li>
            <li><a href="#">Funding</a></li>
          </ul>
       </li>
       <li><a href="#"><img src="static/images/glance.png"/> At a Glance <i className="fa fa-chevron-right" aria-hidden="true"></i></a></li>
       <li><a href="#"><img src="static/images/analysis_icn.png"/> Analysis <i className="fa fa-chevron-right" aria-hidden="true"></i></a></li>
       <li><a href="#"><b> Settings</b> <i className="fa fa-chevron-right" aria-hidden="true"></i></a></li>
    </ul>
</div>
</div>
      
    );
  }
}

ExcellenceHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ExcellenceHeader;
