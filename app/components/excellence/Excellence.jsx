import React from 'react';
import {Jumbotron, Grid, Row, Col, Button, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';

class Excellence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                      <li><span>5</span></li>
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
                      <li><span>6</span></li>
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
                      <li><span>7</span></li>
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
                      <li><span>8</span></li>
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
              <th>
                <div className="rank_head_list">
                    <ul>
                      <li><span>9</span></li>
                      <li><p>Continuing education and employment rate </p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open9"/> <label className="menu-open-button" htmlFor="menu-open9"><i className="fa fa-plus" aria-hidden="true"></i></label>
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
                      <li><span>10</span></li>
                      <li><p>Continuing education and employment rate</p></li>
                      <li> <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open10"/> <label className="menu-open-button" htmlFor="menu-open10"><i className="fa fa-plus" aria-hidden="true"></i></label>
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
              <li className="rank-li2"><span className="rank-number"> 0 </span><a href="#" className="btn rank-btn">Academic progress 2nd year <br/> retention</a></li>
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
            <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>1</span></div>
                    <div className="rank_img"><img src="static/images/rank_img1.png"/></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>UF</h2> <h6>Points</h6></li>
                            <li><h5>University of Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                   <div className="rank_list">
                    <div className="number"><span>2</span></div>
                    <div className="rank_img"><img src="static/images/rank_img2.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>FSU</h2> <h6>Points</h6></li>
                            <li><h5>University of Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>  
              </td>
            </tr>
           <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>3</span></div>
                    <div className="rank_img"><img src="static/images/rank_img3.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>UCF</h2> <h6>Points</h6></li>
                            <li><h5>University of Central Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
           <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>4</span></div>
                    <div className="rank_img"><img src="static/images/rank_img4.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>USF</h2> <h6>Points</h6></li>
                            <li><h5>University of South Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
           <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>5</span></div>
                    <div className="rank_img"><img src="static/images/rank_img5.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>NCF</h2> <h6>Points</h6></li>
                            <li><h5>New College of Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
           <tr>
              <td>
                  <div className="rank_list">
                    <div className="number"><span>6</span></div>
                    <div className="rank_img"><img src="static/images/rank_img6.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>FIU</h2> <h6>Points</h6></li>
                            <li><h5>Florida International<br/> University</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div> 
              </td>
            </tr>
             <tr>
              <td>
                  <div className="rank_list">
                    <div className="number"><span>7</span></div>
                    <div className="rank_img"><img src="static/images/rank_img7.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>FAMU</h2> <h6>Points</h6></li>
                            <li><h5>Florida Aggricultural &<br/> Machanical University</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div> 
              </td>
            </tr>
            <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>8</span></div>
                    <div className="rank_img"><img src="static/images/rank_img8.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>UNF</h2> <h6>Points</h6></li>
                            <li><h5>University of North Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>9</span></div>
                    <div className="rank_img"><img src="static/images/rank_img9.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>FGCU</h2> <h6>Points</h6></li>
                            <li><h5>Florida Gulf <br/> Coast University</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <div className="rank_list">
                    <div className="number"><span>10</span></div>
                    <div className="rank_img"><img src="static/images/rank_img10.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>FAU</h2> <h6>Points</h6></li>
                            <li><h5>Florida Atlantic University</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                 <div className="rank_list">
                    <div className="number"><span>11</span></div>
                    <div className="rank_img"><img src="static/images/rank_img11.png" /></div>
                    <div className="rank_desc">
                        <ul>
                            <li><h2>UWF</h2> <h6>Points</h6></li>
                            <li><h5>University of West Florida</h5> <span className="nummber_points">5</span></li>
                        </ul>
                    </div>
                    <div className="rank_percentage"><h3>94.6%</h3></div>
                </div>
              </td>
            </tr>
           
          </tbody>
        </table>
      </aside>
      <div className="fixedTable-body">
        <table className="table table-bordered">
          <tbody>
             <tr>
               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">72.1%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">67.9%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                              <h2 className="light-green">74.0%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                              <h2 className="light-red">75.4%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">52.8%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">75.7%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">70.1%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">75.4%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">75.7%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">75.8%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">70.2%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>
              
               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$35,300</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                               <h2 className="light-yellow">$32,700</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$36,200</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$36,200</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$31,100</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$36,900</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$35,100</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$35,200</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$35,500</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$34,900</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">72.1%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
              </td>
              
              <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                            <h2 className="light-yellow">$26,450</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                            <h2 className="light-yellow">$27,820</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$24,190</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$26,990</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">$79,520</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$25,990</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">$44,529</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">$32,630</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">$30,080</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$31,830</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">$31,830</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>

               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                           <h2 className="light-green">86.5%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                               <h2 className="light-green">79.3%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                              <h2 className="light-green">70.1%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">67.8%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">70.5%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">56.8%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">38.6%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">54.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">43.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">48.4%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">46.7%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>

               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                           <h2 className="light-green">36.1%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                           <h2 className="light-yellow">39.1%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">49.7%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">54.6%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">39.5%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">46.9%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">46.6%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">44.7%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">44.7%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">54.2%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">51.1%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>

               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                           <h2 className="light-green">31.6%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                               <h2 className="light-green">28.4%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">39.0%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">41.7%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">30.0%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">50.5%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">64.7%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">32.7%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">33.8%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">40.9%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">40.6%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>

               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">69.2%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                      <h2 className="light-red">42.0%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">61.7%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">72.7%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2>*</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">54.1%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">51.5%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">50.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">60.2%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">61.2%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">38.8%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>

                <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                             <h2>*</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2>*</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">69.2%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">65.8%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2>*</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">68.9%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">29.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">71.9%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">76.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">74.6%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">75.8%</h2>
                         </div>
                      </td>
                    </tr>
   
                 </tbody>
                 </table>
               </td>

                <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$35,300</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                               <h2 className="light-yellow">$32,700</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$36,200</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$36,200</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$31,100</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$36,900</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$35,100</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$35,200</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">$35,500</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">$34,900</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">72.1%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
              </td>


  <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td>
                        <div className="percentage_number">
                           <h2 className="light-green">86.5%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                               <h2 className="light-green">79.3%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                              <h2 className="light-green">70.1%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">67.8%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-green">70.5%</h2>
                         </div>
                      </td>
                    </tr>
                    <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">56.8%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">38.6%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">54.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-red">43.0%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">48.4%</h2>
                         </div>
                      </td>
                    </tr>
                      <tr> 
                      <td>
                        <div className="percentage_number">
                             <h2 className="light-yellow">46.7%</h2>
                         </div>
                      </td>
                    </tr>
               
                 
                    
                 </tbody></table>
               </td>


               </tr>
            
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
