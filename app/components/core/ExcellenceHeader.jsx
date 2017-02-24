import React from 'react';
import { Link } from 'react-router';

class ExcellenceHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.openMenu = this.openMenu.bind(this);
    this.openSubMenu = this.openSubMenu.bind(this);
    this.router = context.router;
  }

  

  openMenu() {
    if(typeof window !== 'undefined') {
      document.getElementById('navbx').classList.toggle("active");
    }
  }

  openSubMenu() {
    if(typeof window !== 'undefined') {
      var toggleUl = document.querySelector("#navbx ul ul");
      toggleUl.classList.toggle("active");
      toggleUl.style.display = toggleUl.style.display === 'none' ? 'block' : 'none';
      var x = document.querySelector('#navbx ul li');
      x.setAttribute("class", "active");
    }
  }

  componentWillMount() {
    if(typeof window !== 'undefined') {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
     var x = document.getElementsByTagName("BODY")[0];
     x.setAttribute("class", "newClass");
    }
  }

  render() {
    return (
      <div>
      <nav id="topNav" className="navbar navbar-default navbar-fixed-top bg-blue">
       
        <div className="row paddingheader">

        <div className="col-md-2 col-xs-2"><div id="mobile-nav" onClick={this.openMenu}><img src="static/images/menu_icon_nw.png"/></div></div>
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
                        <li className="active"><a href="#tab1default" data-toggle="tab">EXCELLENCE</a></li>
                        <li><a href="#tab2default" data-toggle="tab">IMPROVEMENT</a></li>
                        <li><a href="#tab3default" data-toggle="tab">fUNDING</a></li>
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
          <a href="#" onClick={this.openSubMenu}><img src="static/images/leader_icon.png"/> Leaderboards <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
          <ul style={{'display': 'none', 'overflowX': 'visible', 'overflowY': 'visible'}}>
            <li><Link className="active" to="/excellence">Excellence</Link></li>
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
