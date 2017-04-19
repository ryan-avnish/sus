import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';
import UserStore from './../../stores/UserStore.jsx';

class WikiHeader extends React.Component {
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
       x.setAttribute("class", "");
    }
  }

  render() {
    return (
      <nav id="topNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid padding">
            <div className="navbar-header">
               <Link to="/">
                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                    <img src="static/images/menu_icon.png"/>
                </button>
                </Link>
            </div>
           
            <div className="padding_rw">
                <div className="name"><h2>SUS Metrics</h2></div>                
            </div>

        </div>
    </nav>
      
    );
  }
}

WikiHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default WikiHeader;
