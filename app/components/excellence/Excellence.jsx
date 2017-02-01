import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import $ from 'jquery';


function getCSVList() {
  return { csvData: ArticleStore.getCSVList() };
}

function callback() {
    console.log('in outer callback')
    // setTimeout(function() {
    //     $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
    //   }, 1000 );
  }

class Excellence extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    ArticleStore.getCSVdata(1, 'Continuingeducationandemploymentrate');
    this.state = {};
    this.state.csvData = [];
    this.state.value = '';
    this.state.showModal = 'none';
    this.handleClick = this.handleClick.bind(this);
    this.handlehover = this.handlehover.bind(this);
    this.onmouseleave = this.onmouseleave.bind(this);
    this.rowonmouseleave = this.rowonmouseleave.bind(this);
     this.rowhandlehover = this.rowhandlehover.bind(this);
    this.modalEvent = this.modalEvent.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state.isMobile=false;
  }

  componentWillMount() {
    ArticleStore.onChange(this._onChange);
  }

  componentDidMount() {
    if(typeof window !== 'undefined') {
      var body = document.querySelector('.fixedTable-body');
      var sidebar = document.querySelector('.fixedTable-sidebar table');
      var header = document.querySelector('.fixedTable-header table');
      var aside = document.querySelector('#astag');
      $(body).scroll(function () {
        $(sidebar).css('margin-top', -$(body).scrollTop());
        return $(header).css('margin-left', -$(body).scrollLeft());
       
      });
      console.log('$( window ).width()',$( window ).width());
      if($( window ).width()==360){
      $('#thHead').hide();
      $('div.fixedTable-body').hide();
      console.log('classname',$(aside).attr("class"));
     $(document).on("pagecreate","#pageone",function(){
     // $(aside).on("swipe",function(){
         console.log('inswipe');
      //   //$(this).hide();
       // });  
     });  
      }else{
          $('#thHead').show();
      $('div.fixedTable-body').show();
      }
      
    }
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getCSVList());
  }

handlehover(idx, title, e) {   
    var cl=$(".zoom"+idx +" p").attr('class');
  $(".zoom"+idx).toggleClass("zoom_class");
  $("td."+cl+" div h2").toggleClass("zoom_class");
 
  // $("td."+cl+" div h2").css({
  //  "font-size":"34px" 
  // })
 }


                      

 onmouseleave(idx, title, e) {  
    var cl=$(".zoom"+idx +" p").attr('class');
    $(".cool").removeClass("zoom_class");
 $("td."+cl+" div h2").removeClass("zoom_class");
 
  // $("td."+cl+" div h2").css({
  //  "font-size":"30px" 
  // })
 }

 rowhandlehover(i, e) {  
  $(".row"+i+" h2").css({"font-size":"34px" });
 }

 rowonmouseleave(i, e) {  
    $(".row"+i+" h2").css({ "font-size":"30px"});
 }
  swipe(idx, title, e) {   
  
}

  handleClick(idx, title, e) {    
    

    if(typeof window !== 'undefined') {
       var posX = $('.zoom'+idx).offset().left;
      var eTop = $('#h-left').offset().top; //get the offset top of the element
      var position=eTop - posX;
      //  $(".zoom"+idx).toggleClass("zoom_class");
       $(".zoom"+idx).toggleClass("slide_class");
        var cl=$(".zoom"+idx +" p").attr('class');
        var firstcolumn=$(".rank li").attr("id");
      setTimeout(function() {            
        $(".rank_head_list ul.slide_class").css({
      '-webkit-transform' : "translate("+position+"px,0px)",
      'transform'         : "translate("+position+"px,0px)" ,
      "opacity":0 
      });
      $("td."+cl+" div h2").css({
      '-webkit-transform' : "translate("+position+"px,0px)",
     'transform'         : "translate("+position+"px,0px)" ,
     "opacity":0 
     });
     setTimeout(function() {        
      $(".cool").removeAttr("style");
      $(".cool").removeClass("slide_class");
      $(".cool").removeClass("zoom_class");
      $('th.'+cl+" div").removeAttr("style");

      $("td."+cl+" div h2").css({
      '-webkit-transform' : "",
     'transform'         : "" ,
     "opacity":1 
     });

      $("td."+cl+" div h2").removeClass("slide_class");
      $("td."+cl+" div h2").removeClass("zoom_class");
      $("td."+cl+" div").removeAttr("style");
      $('th.'+cl).fadeIn(1000);
       $('td.'+cl).fadeIn(1000);
    }, 1200);  
  //   setTimeout(function() {
  //  $('th.'+cl).hide();
  //      $('td.'+cl).hide();  
  //    }, 1700);      
    
     setTimeout(function() {  
     $('th.'+cl).fadeOut(800);
     $('td.'+cl).fadeOut(800);  
     }, 500);

  }, 500);

     //first 90degree flip

    
       setTimeout(function() {
        if (  $(".fliptr td").css( "transform" ) == 'none' ){
            $(".fliptr td").css("transform","rotateX(90deg)");
        } else {
            $(".fliptr td").css("transform","" );
        }
           }, 1200);

       var invi=idx-1;
       console.log('invi',invi);

    //  get new data
      setTimeout(function() {        
        ArticleStore.getCSVdata(idx, title);     
// setTimeout(function() {
//         $('th.hide'+firstcolumn+' div').animate({width: 'toggle'});
//     $('td.hide'+firstcolumn+' div').animate({width: 'toggle'});
//     }, 1800);
      }, 1600);

  
      function getAllImages(maxImages) {
      var imgCount = 0;

      function getNextImage() {
        var removetime=2000;
        if(imgCount>0){
        removetime=300;
        }         
            
      setTimeout(function(){ 
        $("#tr"+imgCount+" td").css("transform","")
          if (imgCount < maxImages) {
             ++imgCount;
             getNextImage();
          } 
         }, removetime);
         if(imgCount==maxImages){
           $(".fliptr td").css("transform","" )
         }
      }
      getNextImage();
     }
    getAllImages(7);
    }
  }

  callback() {
    console.log('in innner callback')
    // setTimeout(function() {
    //     $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
    //   }, 1000 );
  }

  modalEvent() {
    this.setState({
      showModal: 'block'
    })
  }

  hideModal() {
    this.setState({
      showModal: 'none'
    })
  }

  render() {
   // setTimeout(function() { this.setState({position: 1}); }.bind(this), 3000);
    const divStyle = {
      visibility: 'visible', 
      animationDelay: 0.3+'s', 
      animationName: 'fadeIn'
    };
    return (
      
      <div className="container-fluid tab">
   <div className="spc_bx">
     <div className="fixedTable" id="demo">
      <header className="fixedTable-header" id="thHead">
        <table className="table table-bordered">
          <thead >
            <tr>
            {
              this.state.csvData.headers !== undefined ? this.state.csvData.headers.map((head, i)=>{
                if(head !== null){
                
                return(
                  <th key={'header'+i} className={"hide"+i}>
                    <div className="rank_head_list">
                        <ul className={"cool zoom"+head.idx+ " hide"+i}>
                          <li><span>{head.idx}</span></li>
                          <li onMouseLeave={this.onmouseleave.bind(this, head.idx, Object.keys(head)[0])} onMouseEnter={this.handlehover.bind(this, head.idx, Object.keys(head)[0])} onClick={this.handleClick.bind(this, head.idx, Object.keys(head)[0])}><p className={"hide"+i}>{head[Object.keys(head)[0]]}</p></li>
                          <li className="check_div"> 
                      <div className="last">
                          <input type="checkbox" className="menu-open" name="menu-open" id={"menu-open"+i}/> 
                          <label className="menu-open-button" htmlFor={"menu-open"+i}>
                          <i className="fa plus" aria-hidden="true"><img src="static/images/plus.png"/></i></label>
                                <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                                <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                                <a href="#" className="menu-item close" data-dismiss="modal" aria-hidden="true" id="popup" onClick={this.modalEvent}> <img src="static/images/cocktail.png"/> </a>
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
      <div className="dialog_box" id="myModal" style={{'display': this.state.showModal}}>
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
        <button type="button" className="btn btn-default" id="canc_modal" onClick={this.hideModal}>Cancel</button>
        <button type="button" className="btn btn-primary">Apply</button>
      </div>
    </div>
  </div>
</div>
<div data-role="page" id="pageone">
      <aside className="fixedTable-sidebar test" id="astag">
         <div className="rank" id="h-left">
         {
          this.state.csvData.paramkey !== undefined ? <ul id="slide_effect">
              <li id={this.state.csvData.paramkey.idx} className="rank-li1"><h4>Rank</h4></li>
              <li className="rank-li2"><span className="rank-number"> {this.state.csvData.paramkey.idx} </span><a href="#" className="btn rank-btn">{this.state.csvData.paramkey[Object.keys(this.state.csvData.paramkey)[0]]}</a>
              <div className="add_plus">
                 <div className="last">
                          <input type="checkbox" className="menu-open" name="menu-open" id="menu-open"/> 
                          <label className="menu-open-button" htmlFor="menu-open">
                          <i className="fa plus" aria-hidden="true"><img src="static/images/plus.png"/></i></label>
                                <a href="#" className="menu-item"> <img src="static/images/info-icn.png"/> </a>
                                <a href="#" className="menu-item"> <img src="static/images/bar_icn.png"/> </a>
                                <a href="#" className="menu-item" id="popup" onClick={this.modalEvent}> <img src="static/images/cocktail.png"/> </a>
                                <a href="#" className="menu-item"> <img src="static/images/share_icn.png"/></a>
                        </div>
              </div>

              </li>


            </ul> : ''
         }

         </div>

  

        <table className="table table-bordered">
          <tbody>
          {
            this.state.csvData.single !== undefined ? this.state.csvData.single.map((clicked, i)=>{
              var idxVal = i+1;
              var showData;
                if(clicked[Object.keys(clicked)[4]] == -1) {
                  showData = '*';
                }else if(clicked[Object.keys(clicked)[1]] == '%') {
                  showData = (clicked[Object.keys(clicked)[4]].toFixed(1))+clicked[Object.keys(clicked)[1]];
                  var percent = clicked[Object.keys(clicked)[4]];
                }else if(clicked[Object.keys(clicked)[1]] == '$') {
                  showData = clicked[Object.keys(clicked)[1]]+(clicked[Object.keys(clicked)[4]].toLocaleString('en'))
                  if(i == 0) {
                    this.state.value = clicked[Object.keys(clicked)[4]];
                  }
                  var percent = (clicked[Object.keys(clicked)[4]]/this.state.value)*100;
                  percent = percent.toFixed(1);
                } 
              
               return(
                <tr key={'single'+i} className="fliptr" id={"tr"+i}>
                  <td>
                     <div className="rank_list" onMouseLeave={this.rowonmouseleave.bind(this,i)} onMouseEnter={this.rowhandlehover.bind(this,i)}>
                        <div className="number"><span>{idxVal}</span></div>
                        <div className="rank_img"><img src={clicked.Logo_Url}/></div>
                        <div className="rank_desc">
                            <ul>

                                <li><div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow={percent != undefined ? percent : 0} aria-valuemin="0" aria-valuemax="100" style={{'width': percent != undefined ? percent+'%' : 0+'%', 'backgroundColor': clicked[Object.keys(clicked)[2]]}}>
                                <h2>{clicked.S_Name}</h2> <h6>Points</h6>
                              </div>
                            </div>
                            
                            </li>
                                <li><h5>{clicked.Full_Name}</h5> <span className="nummber_points">{clicked[Object.keys(clicked)[3]] == -1 ? '*' : clicked[Object.keys(clicked)[3]]}</span></li>
                            </ul>
                        </div>
                        <div className="rank_percentage" style={{'color': clicked[Object.keys(clicked)[2]]}}><h3>{showData !== undefined ? showData : ''}</h3></div>
                    </div>
                  </td>
                </tr>
               ) 
            }) : ''
          }
          </tbody>
        </table>
      </aside>
     </div>
      <div className="fixedTable-body">
        <table className="table table-bordered">
          <tbody id="tbbody">
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

          

              return (<tr key={'grid'+i}>
              
               <td>
                 <table className="table table-bordered">
                    <tbody><tr> 
                      <td className={"hide0 row"+i}>
                        <div  className="percentage_number">
                            <h2 style={{'color':list[c0+'pointcolor']}}>{list[c0] == -1 ? '*' : list[c0+'type'] == '%' ? (list[c0].toFixed(1))+list[c0+'type'] : list[c0+'type']+(list[c0].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                    
                      <td className={"hide1 row"+i}>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c1+'pointcolor']}}>{list[c1] == -1 ? '*' : list[c1+'type'] == '%' ? (list[c1].toFixed(1))+list[c1+'type'] : list[c1+'type']+(list[c1].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                   
                      <td className={"hide2 row"+i}>
                        <div className="percentage_number">
                              <h2 style={{'color':list[c2+'pointcolor']}}>{list[c2] == -1 ? '*' : list[c2+'type'] == '%' ? (list[c2].toFixed(1))+list[c2+'type'] : list[c2+'type']+(list[c2].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                   
                      <td className={"hide3 row"+i}>
                        <div className="percentage_number">
                              <h2 style={{'color':list[c3+'pointcolor']}}>{list[c3] == -1 ? '*' : list[c3+'type'] == '%' ? (list[c3].toFixed(1))+list[c3+'type'] : list[c3+'type']+(list[c3].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                   
                      <td className={"hide4 row"+i}>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c4+'pointcolor']}}>{list[c4] == -1 ? '*' : list[c4+'type'] == '%' ? (list[c4].toFixed(1))+list[c4+'type'] : list[c4+'type']+(list[c4].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                   
                      <td className={"hide5 row"+i}>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c5+'pointcolor']}}>{list[c5] == -1 ? '*' : list[c5+'type'] == '%' ? (list[c5].toFixed(1))+list[c5+'type'] : list[c5+'type']+(list[c5].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                  
                      <td className={"hide6 row"+i}>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c6+'pointcolor']}}>{list[c6] == -1 ? '*' : list[c6+'type'] == '%' ? (list[c6].toFixed(1))+list[c6+'type'] : list[c6+'type']+(list[c6].toLocaleString('en'))}</h2>
                         </div>
                      </td>
                    
                      <td className={"hide7 row"+i}>
                        <div className="percentage_number">
                             <h2 style={{'color':list[c7+'pointcolor']}}>{list[c7] == -1 ? '*' : list[c7+'type'] == '%' ? (list[c7].toFixed(1))+list[c7+'type'] : list[c7+'type']+(list[c7].toLocaleString('en'))}</h2>
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
