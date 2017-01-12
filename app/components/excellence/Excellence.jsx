import React from 'react';
import {Jumbotron, Grid, Row, Col, Button, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import loadJS from 'load-js';

function getCSVList() {
  return { csvData: ArticleStore.getCSVList() };
}

class Excellence extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    ArticleStore.getCSVdata(5, 'Academicprogress2ndyearretention');
    this.state = {};
    this.state.csvData = [];
    this.handleClick = this.handleClick.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    // loadJS([{
    //   async: true,
    //   url: "/static/js/jquery.min.js"
    // }, {
    //   async: true,
    //   url: "/static/js/scripts.js"
    // }, {
    //   async: true,
    //   url: "/static/js/bootstrap.min.js"
    // }, {
    //   async: true,
    //   url: "/static/js/jquery.easing.min.js"
    // }, {
    //   async: true,
    //   url: "/static/js/wow.js"
    // }])
    // .then(() => {
    //   console.log("all done!");
    // });
    ArticleStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getCSVList());
  }

  handleClick(idx, title, e) {
    ArticleStore.getCSVdata(idx, title);
  }

  render() {
    const divStyle = {
      visibility: 'visible', 
      animationDelay: 0.3+'s', 
      animationName: 'fadeIn'
    };

    return (
      
      <div className="container-fluid tab">
   <div className="spc_bx">
     <div className="fixedTable" id="demo">
      <header className="fixedTable-header">
        <table className="table table-bordered">
          <thead>
            <tr>
            {
              this.state.csvData.headers !== undefined ? this.state.csvData.headers.map((head, i)=>{
                if(head !== null){
                
                return(
                  <th key={'xyz'+i}>
                    <div className="rank_head_list">
                        <ul>
                          <li><span>{head.idx}</span></li>
                          <li onClick={this.handleClick.bind(this, head.idx, Object.keys(head)[0])}><p>{head[Object.keys(head)[0]]}</p></li>
                          <li className="check_div"> 
                      <div className="last">
                          <input type="checkbox" href="#" className="menu-open" name="menu-open" id={"menu-open"+i}/> 
                          <label className="menu-open-button" htmlFor={"menu-open"+i}><i className="fa fa-plus" aria-hidden="true"></i></label>
                                <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                                <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                                <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                                <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                        </div>
                        </li>

                        </ul>
                       </div>
                  </th>
                )
              } else {

              }
              }) : ''
            }
            </tr>
          </thead>
        </table>
      </header>
      <aside className="fixedTable-sidebar">
         <div className="rank">
         {
          this.state.csvData.paramkey !== undefined ? <ul>
              <li className="rank-li1"><h4>Rank</h4></li>
              <li className="rank-li2"><span className="rank-number"> {this.state.csvData.paramkey.idx} </span><a href="#" className="btn rank-btn">{this.state.csvData.paramkey[Object.keys(this.state.csvData.paramkey)[0]]}</a></li>
              <li className="rank-li3"><a id="popup" href="#"><img src="static/images/filter_icon.png" alt="filter"/> </a></li>
            </ul> : ''
         }
            

                   
          <div className=" dialog_box" id="myModal" >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel">Metric Excellence Filters</h4>
                </div>
                <div className="modal-body">
                   <form className="form-horizontal">
                        <div className="form-group">
                          <label htmlFor="inputEmail3" className="col-sm-4 control-label">Filter Type</label>
                          <div className="col-sm-8">
                            <select className="form-select">
                               <option>Enrollment Status</option>
                               <option>Enrollment Status</option>
                               <option>Enrollment Status</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPassword3" className="col-sm-4 control-label">Filter Selection</label>
                          <div className="col-sm-8">
                            <textarea className="text-area"></textarea>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPassword3" className="col-sm-4 control-label">Active Filters</label>
                          <div className="col-sm-8">
                             <div className="tag_bx">
                                 <ul> 
                                   <li>All Enrolled<a href="#">X</a></li>
                                    <li>All Enrolled<a href="#">X</a></li>
                                 </ul>

                             </div>
                          </div>
                        </div>
                       
                </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" id="canc_modal">Cancel</button>
        <button type="button" className="btn btn-primary">Apply</button>
      </div>
    </div>
  </div>
</div>
         </div>

  

        <table className="table table-bordered">
          <tbody>
          {
            this.state.csvData.single !== undefined ? this.state.csvData.single.map((clicked, i)=>{
              var idxVal = i+1;
              var showData;
              if(clicked[Object.keys(clicked)[4]] == 111) {
                showData = '*';
              }else if(clicked[Object.keys(clicked)[1]] == '%') {
                showData = clicked[Object.keys(clicked)[4]]+clicked[Object.keys(clicked)[1]];
              }else if(clicked[Object.keys(clicked)[1]] == '$') {
                showData = clicked[Object.keys(clicked)[1]]+clicked[Object.keys(clicked)[4]]
              } 
              var percent = (clicked[Object.keys(clicked)[3]]/10) *100;

               return(
                <tr key={'abc'+i}>
                  <td>
                     <div className="rank_list">
                        <div className="number"><span>{idxVal}</span></div>
                        <div className="rank_img"><img src={clicked.Logo_Url}/></div>
                        <div className="rank_desc">
                            <ul>

                                <li><div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={{'width': percent+'%', 'backgroundColor': clicked[Object.keys(clicked)[2]]}}>
                                <h2>{clicked.S_Name}</h2> <h6>Points</h6>
                              </div>
                            </div>
                            
                            </li>
                                <li><h5>{clicked.Full_Name}</h5> <span className="nummber_points">{clicked[Object.keys(clicked)[3]] == 111 ? '*' : clicked[Object.keys(clicked)[3]]}</span></li>
                            </ul>
                        </div>
                        <div className="rank_percentage" style={{'color': clicked[Object.keys(clicked)[2]]}}><h3>{showData}</h3></div>
                    </div>
                  </td>
                </tr>
               ) 
            }) : ''
          }
          </tbody>
        </table>
      </aside>
      <div className="fixedTable-body">
        <table className="table table-bordered">
          <tbody>
          {

            this.state.csvData.griddata !== undefined ? this.state.csvData.griddata.map((list, i)=>{

              var c0=Object.keys(this.state.csvData.headers[0])[0];
              var c1=Object.keys(this.state.csvData.headers[1])[0];
              var c2=Object.keys(this.state.csvData.headers[2])[0];
              var c3=Object.keys(this.state.csvData.headers[3])[0];
              var c4=Object.keys(this.state.csvData.headers[4])[0];
              var c5=Object.keys(this.state.csvData.headers[5])[0];
              var c6=Object.keys(this.state.csvData.headers[6])[0];
              var c7=Object.keys(this.state.csvData.headers[7])[0];

              return (<tr key={'def'+i}>
               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                            <h2 style={{'color':list[c0+'pointcolor']}}>{list[c0] == 111 ? '*' : list[c0+'type'] == '%' ? list[c0]+list[c0+'type'] : list[c0+'type']+list[c0]}</h2>
                         </div>
                      </td>
                    
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c1+'pointcolor']}}>{list[c1] == 111 ? '*' : list[c1+'type'] == '%' ? list[c1]+list[c1+'type'] : list[c1+'type']+list[c1]}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                              <h2 style={{'color':list[c2+'pointcolor']}}>{list[c2] == 111 ? '*' : list[c2+'type'] == '%' ? list[c2]+list[c2+'type'] : list[c2+'type']+list[c2]}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                              <h2 style={{'color':list[c3+'pointcolor']}}>{list[c3] == 111 ? '*' : list[c3+'type'] == '%' ? list[c3]+list[c3+'type'] : list[c3+'type']+list[c3]}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c4+'pointcolor']}}>{list[c4] == 111 ? '*' : list[c4+'type'] == '%' ? list[c4]+list[c4+'type'] : list[c4+'type']+list[c4]}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c5+'pointcolor']}}>{list[c5] == 111 ? '*' : list[c5+'type'] == '%' ? list[c5]+list[c5+'type'] : list[c5+'type']+list[c5]}</h2>
                         </div>
                      </td>
                  
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c6+'pointcolor']}}>{list[c6] == 111 ? '*' : list[c6+'type'] == '%' ? list[c6]+list[c6+'type'] : list[c6+'type']+list[c6]}</h2>
                         </div>
                      </td>
                    
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c7+'pointcolor']}}>{list[c7] == 111 ? '*' : list[c7+'type'] == '%' ? list[c7]+list[c7+'type'] : list[c7+'type']+list[c7]}</h2>
                         </div>
                      </td>
                  
                    </tr>
                 </tbody></table>
               </td>
              
               </tr>)
                
            }) : ''
          }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
  );
  }
  }

export default Excellence;
