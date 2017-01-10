import React from 'react';
import {Jumbotron, Grid, Row, Col, Button, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';


function getCSVList() {
  return { csvData: ArticleStore.getCSVList() };
}

class Excellence extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    ArticleStore.getCSVdata();
    this.state = {};
    this.state.csvData = [];
    // this.state.id=[];
    // this.state.Continuingeducationandemploymentratepointcolor=[];
    // this.state.Medianwagesofbachelorsgradspointcolor=[];
    // this.state.Averagecostperbachelorsdegreepointcolor=[];
    // this.state.Sixyeargraduationratepointcolor=[];
    // this.state.Academicprogress2ndyearretentionpointcolor=[];
    // this.state.BachelorsSTEMandstrategicemphasispointcolor=[];
    // this.state.UndergraduateswithPellgrantpercentpointcolor=[];
    // this.state.GraduateSTEMandstrategicemphasispointcolor=[];
    // this.state.Bachelorsdegreeswithoutaccesshourspointcolor=[];
    // this.state.createdAt=[];
    // this.state.year=[];
    // this.state.Bachelorsdegreeswithoutaccesshourspoint=[];
    // this.state.GraduateSTEMandstrategicemphasispoint=[];
    // this.state.UndergraduateswithPellgrantpercentpoint=[];
    // this.state.BachelorsSTEMandstrategicemphasispoint=[];
    // this.state.Academicprogress2ndyearretentionpoint=[];
    // this.state.Sixyeargraduationratepoint=[];
    // this.state.Averagecostperbachelorsdegreepoint=[];
    // this.state.Medianwagesofbachelorsgradspoint=[];
    // this.state.Continuingeducationandemploymentratepoint=[];
    // this.state.Bachelorsdegreeswithoutaccesshours=[];
    // this.state.GraduateSTEMandstrategicemphasis=[];
    // this.state.UndergraduateswithPellgrantpercent=[];
    // this.state.BachelorsSTEMandstrategicemphasis=[];
    // this.state.Academicprogress2ndyearretention=[];
    // this.state.Sixyeargraduationrate=[];
    // this.state.Averagecostperbachelorsdegree=[];
    // this.state.Medianwagesofbachelorsgrads=[];
    // this.state.Continuingeducationandemploymentrate=[];
    // this.state.Logo_Url=[];
    // this.state.S_Name=[];
    // this.state.Full_Name=[];
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ArticleStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getCSVList());
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
              <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>1</span></li>
                      <li><p>Continuing education and employment rate</p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open1"/> <label className="menu-open-button" htmlFor="menu-open1"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>

                    </ul>
                </div>
              </th>
               <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>2</span></li>
                      <li><p>Median wages of bachelor’s grads </p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open2"/> <label className="menu-open-button" htmlFor="menu-open2"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
               <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>3</span></li>
                      <li><p>Average cost per bachelor’s degree</p></li>
                     <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open3"/> <label className="menu-open-button" htmlFor="menu-open3"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
               <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>4</span></li>
                      <li><p className="height">Six year graduation rate</p></li>
                     <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open4"/> <label className="menu-open-button" htmlFor="menu-open4"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
               <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>6</span></li>
                      <li><p>Bachelor’s STEM and strategic emphasis </p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open5" id="menu-open5"/> <label className="menu-open-button" htmlFor="menu-open5"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
               <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>7</span></li>
                      <li><p>Undergraduates with Pell-grant percent</p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open6"/> <label className="menu-open-button" htmlFor="menu-open6"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
              <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>8</span></li>
                      <li><p>Graduate STEM and strategic emphasis</p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open7"/> <label className="menu-open-button" htmlFor="menu-open7"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
               <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>9</span></li>
                      <li><p>Bachelor’s degrees without access hours</p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open8"/> <label className="menu-open-button" htmlFor="menu-open8"><i className="fa fa-plus" aria-hidden="true"></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                            <a href="#" className="menu-item"> <img src="static/images/search_icn.png"/> </a>
                       </li>
                    </ul>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </header>
      <aside className="fixedTable-sidebar">
         <div className="rank">
            <ul>
              <li className="rank-li1"><h4>Rank</h4></li>
              <li className="rank-li2"><span className="rank-number"> 5 </span><a href="#" className="btn rank-btn">Academic progress 2nd year <br/> retention</a></li>
              <li className="rank-li3"><a id="popup" href="#"><img src="static/images/filter_icon.png" alt="filter"/> </a></li>
            </ul>

                   
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
            this.state.csvData.length > 0 ? this.state.csvData.map((single, i)=>{
              console.log('single', single);
               return(
                <tr>
                  <td>
                     <div className="rank_list">
                        <div className="number"><span>1</span></div>
                        <div className="rank_img"><img src={single.Logo_Url}/></div>
                        <div className="rank_desc">
                            <ul>
                                <li><h2>{single.S_Name}</h2> <h6>Points</h6></li>
                                <li><h5>{single.Full_Name}</h5> <span className="nummber_points">{single.Academicprogress2ndyearretentionpoint}</span></li>
                            </ul>
                        </div>
                        <div className="rank_percentage" style={{'color': single.Academicprogress2ndyearretentionpointcolor}}><h3>{single.Academicprogress2ndyearretention+'%'}</h3></div>
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
            this.state.csvData.length > 0 ? this.state.csvData.map((list, i)=>{
              return (<tr>
               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list.Continuingeducationandemploymentratepointcolor}}>{list.Continuingeducationandemploymentrate == 11 ? '*' : list.Continuingeducationandemploymentrate+'%'}</h2>
                         </div>
                      </td>
                    
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list.Medianwagesofbachelorsgradspointcolor}}>{list.Medianwagesofbachelorsgrads == 11 ? '*' : '$'+list.Medianwagesofbachelorsgrads}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                              <h2 style={{'color':list.Averagecostperbachelorsdegreepointcolor}}>{list.Averagecostperbachelorsdegree == 11 ? '*' : '$'+list.Averagecostperbachelorsdegree}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                              <h2 style={{'color':list.Sixyeargraduationratepointcolor}}>{list.Sixyeargraduationrate == 11 ? '*' : list.Sixyeargraduationrate+'%'}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list.BachelorsSTEMandstrategicemphasispointcolor}}>{list.BachelorsSTEMandstrategicemphasis == 11 ? '*' : list.BachelorsSTEMandstrategicemphasis+'%'}</h2>
                         </div>
                      </td>
                   
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list.UndergraduateswithPellgrantpercentpointcolor}}>{list.UndergraduateswithPellgrantpercent == 11 ? '*' : list.UndergraduateswithPellgrantpercent+'%'}</h2>
                         </div>
                      </td>
                  
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list.GraduateSTEMandstrategicemphasispointcolor}}>{list.GraduateSTEMandstrategicemphasis == 11 ? '*' : list.GraduateSTEMandstrategicemphasis+'%'}</h2>
                         </div>
                      </td>
                    
                      <td>
                        <div className="percentage_number">
                             <h2 style={{'color':list.Bachelorsdegreeswithoutaccesshourspointcolor}}>{list.Bachelorsdegreeswithoutaccesshours == 11 ? '*' : list.Bachelorsdegreeswithoutaccesshours+'%'}</h2>
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
