import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import $ from 'jquery';
//import Swipeable from 'react-swipeable';
import ReactSwipe from 'react-swipe';
import Swipe from 'swipe-js-iso';
import { Modal } from 'react-bootstrap';
import '../../js/bluebird.min.js';



function getCSVList() {
  return { csvData: ArticleStore.getCSVList() };
}
function getSwipeCSVData() {
  return { swipeCsvData: ArticleStore.getswipeCSVList() };
}
function callback() {
  console.log('in outer callback')
  // setTimeout(function() {
  //     $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
  //   }, 1000 );
}
const swipeOptions = {

  continuous: true,
  transitionEnd() {
    var idx = $("aside div ul li").prop('id');
    idx = parseInt(idx) + 1;
    if (idx <= 9) {
      ArticleStore.getCSVdata(idx, 'Left');
    }
  }

};


class Excellence extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    ArticleStore.getCSVdata(1, 'Continuingeducationandemploymentrate');
    ArticleStore.getswipeCSVdata();
    this.state = {};
    this.state.csvData = [];
    this.state.swipeCsvData = [];
    this.state.value = '';
    this.state.showModal = 'none';
    this.state.showModalInfo = "none";
    this.state.show = "fd";
    this.handleClick = this.handleClick.bind(this);   
    this.handlehover = this.handlehover.bind(this);
    this.chnageelement = this.chnageelement.bind(this);
    this.onChangeHead = this.onChangeHead.bind(this);
    this.getSlideNumber = this.getSlideNumber.bind(this);


    this.onmouseleave = this.onmouseleave.bind(this);
    this.rowonmouseleave = this.rowonmouseleave.bind(this);
    this.rowhandlehover = this.rowhandlehover.bind(this);
    this.modalEvent = this.modalEvent.bind(this);
    this.modalEventInfo = this.modalEventInfo.bind(this);
    this.hideInfoModal = this.hideInfoModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.closeAllPopups = this.closeAllPopups.bind(this);
    this._onChange = this._onChange.bind(this);
    this._swipeOnChange = this._swipeOnChange.bind(this);
    this.plusclick = this.plusclick.bind(this);
    this.state.isMobile = false;
    this.state.showbotModal = false;
    this.state.showMetrice= false;
    this.state.slideindex = 0;
    this.swipe = Swipe(this.refs.container, {});
    this.state.activePopup = 0;
  }

  componentWillMount() {
    ArticleStore.onChange(this._onChange);
    if ($(window).width() >= 360 || $(window).width() < 768) {
      ArticleStore.onChange(this._swipeOnChange);
    }
  }


  componentDidMount() {
    if (typeof window !== 'undefined') {
      $('#topNav').show();
      var body = document.querySelector('.fixedTable-body');
      var sidebar = document.querySelector('.fixedTable-sidebar table');
      var header = document.querySelector('.fixedTable-header table');
      var aside = document.querySelector('#astag');
      $(body).scroll(function () {
        $(sidebar).css('margin-top', -$(body).scrollTop());
        return $(header).css('margin-left', -$(body).scrollLeft());
      });

      if (localStorage.height != "0") {
        this.state.slideindex = localStorage.height;
      }
    }
  }


  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
    ArticleStore.removeChangeListener(this._swipeOnChange);
  }
  chnageelement() {

    console.log("Here in callback")
  }
  _onChange() {
    this.setState(getCSVList());
  }
  _swipeOnChange() {

    this.setState(getSwipeCSVData());
  }
  plusclick(i) {
var c=$('#lblplus'+i).prev('input');
console.log('checked',$(c).is(':checked'));
 if($(c).is(':checked')){
   console.log('checked true');
$(c).prop('checked',false);

 }else{
   console.log('checked false');
$(c).prop('checked','checked');
 }
  }

  handlehover(idx, title, e) {

    var cl = $(".zoom" + idx + " p").attr('class');
    var parenthead = $(".zoom" + idx).parent('div.rank_head_list');
    $(parenthead).toggleClass("zoom_class");
    $("td." + cl + " div.percentage_number").toggleClass("zoom_class");
    $('.fixedTable-sidebar').css({ "z-index": 1 });
    $('.fixedTable-body').css({ overflow: "inherit" });
    // $("td."+cl+" div h2").css({
    //  "font-size":"34px" 
    // })
  }


  onmouseleave(idx, title, e) {
    var cl = $(".zoom" + idx + " p").attr('class');
    var parenthead = $(".zoom" + idx).parent('div.rank_head_list');
    $(parenthead).removeClass("zoom_class");
    $("td." + cl + " div.percentage_number").removeClass("zoom_class");
    $('.fixedTable-sidebar').css("z-index", "99");
   $('.fixedTable-body').css({ overflow: "auto" });
    // $("td."+cl+" div h2").css({
    //  "font-size":"30px" 
    // })
  }

  rowhandlehover(i, e) {
    $(".row" + i + " h2").css({ "font-size": "34px" });
  }

  rowonmouseleave(i, e) {
    $(".row" + i + " h2").css({ "font-size": "30px" });
  }
  swipe(idx, title, e) {

  }

  handleClick(idx, title, e) {
    var cla = $('.rank_head_list li.check_div input.menu-open').removeAttr('checked');
    //console.log('cla',cla);

    if (typeof window !== 'undefined') {
      var posX = $('.zoom' + idx).offset().left;
      var eTop = $('#h-left').offset().top; //get the offset top of the element
      var position = eTop - posX;
      //  $(".zoom" + idx).toggleClass("slide_class");
      var parenthead = $(".zoom" + idx).parent('div.rank_head_list');
      var cl = $(".zoom" + idx + " p").attr('class');
      var firstcolumn = $(".rank li").attr("id");
      var click = $('th.' + cl + ' div.rank_head_list').attr("id");
      console.log('click',click);
      setTimeout(function () {
        $(parenthead).css({
          '-webkit-transform': "translate(" + position + "px,0px)",
          'transform': "translate(" + position + "px,0px)",
          "opacity": 0
        });
        $("td." + cl + " div.percentage_number").css({
          '-webkit-transform': "translate(" + position + "px,0px)",
          'transform': "translate(" + position + "px,0px)",
          "opacity": 0
        });
        setTimeout(function () {
          $('th.' + cl + ' div.child' + click).animate({ 'width': '0%' }, 600);
          $('td.' + cl + ' div.child' + click).animate({ 'width': '0%' }, 600);
        }, 500);

      }, 500);

      //first 90degree fliptr


      setTimeout(function () {
        if ($(".fliptr td").css("transform") == 'none') {
          $(".fliptr td").css("transform", "rotateX(90deg)");
        } else {
          $(".fliptr td").css("transform", "");
        }
      }, 1200);

      var invi = idx - 1;
      //console.log('invi', invi);

      //  get new data
      setTimeout(function () {
        $('th.' + cl + ' div.child' + click).css({ 'width': '100%' });
        $('td.' + cl + ' div.child' + click).css({ 'width': '100%' });
        $('th.' + cl + " div.rank_head_list").removeClass("zoom_class");
        $('th.' + cl + " div.rank_head_list").removeAttr("style");
        $(parenthead).css({
          '-webkit-transform': "",
          'transform': "",
          "opacity": 1
        });
        $("td." + cl + " div.percentage_number").css({
          '-webkit-transform': "",
          'transform': "",
          "opacity": 1
        });

        //  $("td." + cl + " div h2").removeClass("slide_class");
        $("td." + cl + " div.percentage_number").removeClass("zoom_class");
        $("td." + cl + " div.percentage_number").removeAttr("style");
      }, 1800);
      var first = parseInt($('aside ul').attr('id') - 1);
      if ((first - parseInt(click)) > 1) {
        first = first - 1;
      }
      // console.log('first',first);

      setTimeout(function () {
        $(".cool").removeAttr("style");
        $(".cool").removeClass("zoom_class");
        $('th.' + cl + " div.rank_head_list").removeAttr("style");

        $('th.hide' + first + " div.child" + first).css({ width: "0%" });
        $('td.hide' + first + " div.child" + first).css({ width: "0%" });

        ArticleStore.getCSVdata(idx, title);
        $('th.hide' + first).show();
        $('td.hide' + first).show();
        $('th.hide' + first + ' div.child' + first).animate({ 'width': '100%' }, 600);
        $('td.hide' + first + ' div.child' + first).animate({ 'width': '100%' }, 600)
      }, 1700);



      function getAllImages(maxImages) {
        var imgCount = 0;

        function getNextImage() {
          var removetime = 2000;
          if (imgCount > 0) {
            removetime = 300;
          }

          setTimeout(function () {
            $("#tr" + imgCount + " td").css("transform", "")
            if (imgCount < maxImages) {
              ++imgCount;
              getNextImage();
            }
          }, removetime);
          if (imgCount == maxImages) {
            $(".fliptr td").css("transform", "")
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
  closeAllPopups(){    
      this.setState({
        showModalInfo:'none',
        showModal:'none'
      });   
   
  }
  modalEvent() {
    this.setState({
      showModal: 'block'
    })
  }
  modalEventInfo(data,idx){
         var  html = "";
         data.map(function(benchmark){             
               html += " <tr>";
               html += "<td>"+benchmark.points+"</td>"
               html += "<td>"+benchmark.metrics+"</td>"
               html += "<td>"+benchmark.improvement+"</td>"
               html += " </tr>";
         $("#getInfoTable tbody").html(html);
         });
         $(".total_graduate").html(idx);
        this.setState({
          showModalInfo:'block'
        });
  }
  hideModal() {
    this.setState({
      showModal: 'none'
    })
  }
  hideInfoModal(){
    this.setState({
      showModalInfo:'none'
    })
  }
  close() {
     $('#topNav').show();
   //  $('.fixedTable-sidebar').css({"margin-top":""})
    this.setState({
      showbotModal: false
    })
  }
  open() {
    this.setState({
      showbotModal: true
    })
  }
  onChangeHead(idx) {
    $('#topNav').hide();
    console.log('slide',idx)
    $('.slide2').css({"margin-top":"0px !important"})
    this.setState({ activePopup: idx });
    this.setState({
      showbotModal: true
    })
  }

 onMetrics(idx) {
    this.setState({
      showMetrice: true
    })
  }

  getSlideNumber(slidenumber, totallength, e) {
    localStorage.height = slidenumber;
    window.location.reload();
  }

  render() {
    // setTimeout(function() { this.setState({position: 1}); }.bind(this), 3000);
    const divStyle = {
      visibility: 'visible',
      animationDelay: 0.3 + 's',
      animationName: 'fadeIn'
    };

    if ($(window).width() >= 768) {

      return (
        <div data-testatt={this.state.show} className="container-fluid tab mainbody">
          <div className="spc_bx">
            <div className="fixedTable" id="demo">
              <header className="fixedTable-header" id="thHead">
                <table className="table table-bordered">
                  <thead >
                    <tr>
                      {
                        this.state.csvData.headers !== undefined ? this.state.csvData.headers.map((head, i) => {
                          if (head !== null) {
                                  var benchmark_data = head.benchmark;   
                                  var idx = head.idx;

                            return (                               
                              <th key={'header' + i} className={"hide" + i}>
                                <div className={"child" + i} style={{ "background": "#fff none repeat scroll 0 0" }}>
                                  <div className="rank_head_list" id={i}>
                                    <ul className={"cool zoom" + head.idx + " hide" + i}>
                                      <li><span>{head.idx}</span></li>
                                      <li onMouseLeave={this.onmouseleave.bind(this, head.idx, Object.keys(head)[0])} onMouseEnter={this.handlehover.bind(this, head.idx, Object.keys(head)[0])} onClick={this.handleClick.bind(this, head.idx, Object.keys(head)[0])}><p className={"hide" + i}>{head[Object.keys(head)[0]]}</p></li>
                                      <li className="check_div">
                                        <div className="last">
                                          <input type="checkbox" className="menu-open" name="menu-open" id={"menu-open" + i} />
                                          <label onClick= {this.closeAllPopups}   className="menu-open-button" htmlFor={"menu-open" + i}>
                                            <i className="fa plus" aria-hidden="true"><img src="static/images/plus.png" /></i></label>
                                          <a href="#" className="menu-item class" data-dismiss="modal" aria-hidden="true" id="popup" onClick={this.modalEventInfo.bind(this,benchmark_data,idx)}> <img src="static/images/info-icn.png"/> </a>
                                          <Link to="http://zgu8tz.axshare.com/#g=1&p=unf/" target="_blank" className="menu-item"><img src="static/images/bar_icn.png" /> </Link>
                                          <a href="#" className="menu-item close" data-dismiss="modal" aria-hidden="true" id="popup" onClick={this.modalEvent}> <img src="static/images/cocktail.png" /> </a>
                                          <a href="#" className="menu-item"> <img src="static/images/share_icn.png" /></a>
                                          <a href="#" className="menu-item" onClick={this.handleClick.bind(this, head.idx, Object.keys(head)[0])}> <img src="static/images/search_icn.png" /> </a>
                                        </div>
                                      </li>

                                    </ul>

                                  </div>
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
             
              <div id="myModalInfo" className="dialog_box" role="dialog" style={{ 'display': this.state.showModalInfo }}>
                <div className="modal-dialog">                  
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" onClick={this.hideInfoModal}>&times;</button>
                     
                    </div>
                    <div className="modal-body">
                    <div className="getInfoText">
                         <div className="total_graduate">5</div>
                         <div className="info_text_desc">Percent of bachelor's graduates employed and/or continuing their education further 1 year after graduation. </div>
                    </div>
                    
                     <table id="getInfoTable" className="table table-striped">
                      <thead>
                        <tr>
                          <th>Points</th>
                          <th>Excellence</th>
                          <th>Improvment</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                      </tbody>
                      </table>
                      
                    </div>
                    <div className="modal-footer">
                    <div className="footer_button_container">
                       <Link to="/wiki" className="btn btn-primary btn-more">More<i className="fa fa-play"></i></Link>
                    </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="dialog_box" id="myModal" style={{ 'display': this.state.showModal }}>
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
              <aside className="fixedTable-sidebar test" id="astag">
                <div className="rank" id="h-left">
                  {
                    this.state.csvData.paramkey !== undefined ? <ul id="slide_effect" id={this.state.csvData.paramkey.idx}>


                      <li id={this.state.csvData.paramkey.idx} className="rank-li1"><h4>Rank</h4></li>
                      <li className="rank-li2"><span className="rank-number"> {this.state.csvData.paramkey.idx} </span><a href="#" className="btn rank-btn">{this.state.csvData.paramkey[Object.keys(this.state.csvData.paramkey)[0]]}</a>
                        <div className="add_plus">
                          <div className="last">
                            <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
                            <label className="menu-open-button" htmlFor="menu-open">
                              <i className="fa plus" aria-hidden="true"><img src="static/images/plus.png" /></i></label>
                            <a href="#" className="menu-item"> <img src="static/images/info-icn.png" /> </a>
                            <a href="#" className="menu-item"> <img src="static/images/bar_icn.png" /> </a>
                            <a href="#" className="menu-item" id="popup" onClick={this.modalEvent}> <img src="static/images/cocktail.png" /> </a>
                            <a href="#" className="menu-item"> <img src="static/images/share_icn.png" /></a>
                          </div>
                        </div>

                      </li>


                    </ul> : ''
                  }

                </div>



                <table className="table table-bordered">
                  <tbody>
                    {
                      this.state.csvData.single !== undefined ? this.state.csvData.single.map((clicked, i) => {
                        var idxVal = i + 1;
                        var showData;
                        if (clicked[Object.keys(clicked)[4]] == -1) {
                          showData = '*';
                        } else if (clicked[Object.keys(clicked)[1]] == '%') {
                          showData = (clicked[Object.keys(clicked)[4]].toFixed(1)) + clicked[Object.keys(clicked)[1]];
                          var percent = clicked[Object.keys(clicked)[4]];
                        } else if (clicked[Object.keys(clicked)[1]] == '$') {
                          showData = clicked[Object.keys(clicked)[1]] + (clicked[Object.keys(clicked)[4]].toLocaleString('en'))
                          if (i == 0) {
                            this.state.value = clicked[Object.keys(clicked)[4]];

                            if (Object.keys(clicked)[4] == "Averagecostperbachelorsdegree") {
                              var last = this.state.csvData.single[this.state.csvData.single.length - 1];
                              this.state.value = last[Object.keys(last)[4]];
                            }
                          }
                          var percent = (clicked[Object.keys(clicked)[4]] / this.state.value) * 100;
                          percent = percent.toFixed(1);
                        }
                        // console.log('clicked', clicked)
                        return (
                          <tr key={'single' + i} className="fliptr" id={"tr" + i}>
                            <td>
                              <div className="rank_list" onMouseLeave={this.rowonmouseleave.bind(this, i)} onMouseEnter={this.rowhandlehover.bind(this, i)}>
                                <div className="number"><span>{idxVal}</span></div>
                                <div className="rank_img"><img src={clicked.Logo_Url} /></div>
                                <div className="rank_desc">
                                  <ul>

                                    <li><div className="progress">
                                      <div className="progress-bar" role="progressbar" aria-valuenow={percent != undefined ? percent : 0} aria-valuemin="0" aria-valuemax="100" style={{ 'width': percent != undefined ? percent + '%' : 0 + '%', 'backgroundColor': clicked[Object.keys(clicked)[2]] }}>
                                        <h2>{clicked.S_Name}</h2> <h6>Points</h6>
                                      </div>
                                    </div>

                                    </li>
                                    <li><h5>{clicked.Full_Name}</h5> <span className="nummber_points">{clicked[Object.keys(clicked)[3]] == -1 ? '*' : clicked[Object.keys(clicked)[3]]}</span></li>
                                  </ul>
                                </div>
                                <div className="rank_percentage" style={{ 'color': clicked[Object.keys(clicked)[2]] }}><h3>{showData !== undefined ? showData : ''}</h3></div>
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
                  <tbody id="tbbody">
                    {

                      this.state.csvData.griddata !== undefined ? this.state.csvData.griddata.map((list, i) => {


                        var c0 = Object.keys(this.state.csvData.headers[0])[0];
                        var c1 = Object.keys(this.state.csvData.headers[1])[0];
                        var c2 = Object.keys(this.state.csvData.headers[2])[0];
                        var c3 = Object.keys(this.state.csvData.headers[3])[0];
                        var c4 = Object.keys(this.state.csvData.headers[4])[0];
                        var c5 = Object.keys(this.state.csvData.headers[5])[0];
                        var c6 = Object.keys(this.state.csvData.headers[6])[0];
                        var c7 = Object.keys(this.state.csvData.headers[7])[0];



                        return (<tr key={'grid' + i}>

                          <td>
                            <table className="table table-bordered">
                              <tbody><tr>
                                <td className={"hide0 row" + i}>
                                  <div className="child0" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c0 + 'pointcolor'] }}>{list[c0] == -1 ? '*' : list[c0 + 'type'] == '%' ? (list[c0].toFixed(1)) + list[c0 + 'type'] : list[c0 + 'type'] + (list[c0].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide1 row" + i}>
                                  <div className="child1" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c1 + 'pointcolor'] }}>{list[c1] == -1 ? '*' : list[c1 + 'type'] == '%' ? (list[c1].toFixed(1)) + list[c1 + 'type'] : list[c1 + 'type'] + (list[c1].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide2 row" + i}>
                                  <div className="child2" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c2 + 'pointcolor'] }}>{list[c2] == -1 ? '*' : list[c2 + 'type'] == '%' ? (list[c2].toFixed(1)) + list[c2 + 'type'] : list[c2 + 'type'] + (list[c2].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide3 row" + i}>
                                  <div className="child3" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c3 + 'pointcolor'] }}>{list[c3] == -1 ? '*' : list[c3 + 'type'] == '%' ? (list[c3].toFixed(1)) + list[c3 + 'type'] : list[c3 + 'type'] + (list[c3].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide4 row" + i}>
                                  <div className="child4" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c4 + 'pointcolor'] }}>{list[c4] == -1 ? '*' : list[c4 + 'type'] == '%' ? (list[c4].toFixed(1)) + list[c4 + 'type'] : list[c4 + 'type'] + (list[c4].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide5 row" + i}>
                                  <div className="child5" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c5 + 'pointcolor'] }}>{list[c5] == -1 ? '*' : list[c5 + 'type'] == '%' ? (list[c5].toFixed(1)) + list[c5 + 'type'] : list[c5 + 'type'] + (list[c5].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide6 row" + i}>
                                  <div className="child6" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c6 + 'pointcolor'] }}>{list[c6] == -1 ? '*' : list[c6 + 'type'] == '%' ? (list[c6].toFixed(1)) + list[c6 + 'type'] : list[c6 + 'type'] + (list[c6].toLocaleString('en'))}</h2>
                                    </div>
                                  </div>
                                </td>

                                <td className={"hide7 row" + i}>
                                  <div className="child7" style={{ "background": "#fff none repeat scroll 0 0" }}>
                                    <div className="percentage_number">
                                      <h2 style={{ 'color': list[c7 + 'pointcolor'] }}>{list[c7] == -1 ? '*' : list[c7 + 'type'] == '%' ? (list[c7].toFixed(1)) + list[c7 + 'type'] : list[c7 + 'type'] + (list[c7].toLocaleString('en'))}</h2>
                                    </div>
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
    else {

      return (
        <div className="container-fluid tab">
          <div className="spc_bx">
            <ReactSwipe key={this.state.swipeCsvData.length} ref="container" swipeOptions={{ startSlide: this.state.slideindex, continuous: false }}>
              {
                this.state.swipeCsvData !== undefined ? this.state.swipeCsvData.map((head, i) => {
                  return (
                    <div key={'sin' + i} className={"fixedTable-sidebar test slide" + i} id="astag">

                      <div className="rank page-header1" id="h-left">
                        {
                          <ul id="slide_effect">
                            <li id={i + 1} className="rank-li1"><h4>Rank</h4></li>
                            <li className="rank-li2" ><span className="rank-number"> {i + 1} </span><a href="#" onClick={this.onChangeHead.bind(this, i)} className="btn rank-btn">{this.state.swipeCsvData[i][11].head}</a>
                              <div className="add_plus">
                                <div className="last">
                                  <input type="checkbox" className="menu-open" name="menu-open" id={"menu-open"+i}  />
                                  <label className="menu-open-button" htmlFor="menu-open" id={"lblplus"+i}  onClick={this.plusclick.bind(this,i)} >
                                    <i className="fa plus" aria-hidden="true"><img src="static/images/plus.png" /></i></label>
                                  <a href="#" className="menu-item"> <img src="static/images/info-icn.png" /> </a>
                                  <a href="#" className="menu-item"> <img src="static/images/bar_icn.png" /> </a>
                                  <a href="#" className="menu-item" id="popup" onClick={this.modalEvent}> <img src="static/images/cocktail.png" /> </a>
                                  <a href="#" className="menu-item"> <img src="static/images/share_icn.png" /></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        }
                      </div>
                      {
                        head !== undefined ? head.map((headdata, j) => {
                          if (headdata.head == undefined) {
                            var showData;
                            if (headdata[Object.keys(headdata)[4]] == -1) {
                              showData = '*';
                            } else if (headdata[Object.keys(headdata)[1]] == '%') {
                              showData = (headdata[Object.keys(headdata)[4]].toFixed(1)) + headdata[Object.keys(headdata)[1]];
                              var percent = headdata[Object.keys(headdata)[4]];
                            } else if (headdata[Object.keys(headdata)[1]] == '$') {
                              showData = headdata[Object.keys(headdata)[1]] + (headdata[Object.keys(headdata)[4]].toLocaleString('en'))
                              if (i == 0) {
                                this.state.value = headdata[Object.keys(headdata)[4]];

                                if (Object.keys(headdata)[4] == "Averagecostperbachelorsdegree") {
                                  var last = headdata[headdata.length - 1];
                                  this.state.value = last[Object.keys(last)[4]];
                                }
                              }
                              var percent = (headdata[Object.keys(headdata)[4]] / this.state.value) * 100;
                              percent = percent.toFixed(1);
                            }
                            return (
                              <table key={'single' + j} className="table table-bordered width"  >
                                <tbody>
                                  <tr className="fliptr" id={"tr" + j}>
                                    <td>
                                      <div className="rank_list" onMouseLeave={this.rowonmouseleave.bind(this, j)} onMouseEnter={this.rowhandlehover.bind(this, j)}>
                                        <div className="number"><span>{j + 1}</span></div>
                                        <div className="rank_img"><img src={headdata.Logo_Url} /></div>
                                        <div className="rank_desc">
                                          <ul>
                                            <li><div className="progress">
                                              <div className="progress-bar" role="progressbar" aria-valuenow={headdata.Logo_Url != undefined ? headdata[Object.keys(headdata)[4]] : 0} aria-valuemin="0" aria-valuemax="100" style={{ 'width': headdata[Object.keys(headdata)[4]] != undefined ? headdata[Object.keys(headdata)[4]] + '%' : 0 + '%', 'backgroundColor': headdata[Object.keys(headdata)[2]] }}>
                                                <h2>{headdata.S_Name}</h2> <h6>Points</h6>
                                              </div>
                                            </div>
                                            </li>
                                            <li><h5>{headdata.Full_Name}</h5> <span className="nummber_points">{headdata[Object.keys(headdata)[3]] == -1 ? '*' : headdata[Object.keys(headdata)[3]]}</span></li>
                                          </ul>
                                        </div>
                                        <div className="rank_percentage" style={{ 'color': headdata[Object.keys(headdata)[2]] }}><h3>{showData !== undefined ? showData : ''}</h3></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            )
                          }
                        }) : ''
                      }

                    </div>
                  )
                }) : ''
              }
            </ReactSwipe>
            <Modal show={this.state.showbotModal} onHide={this.close}  >

              <Modal.Body className="rankPopup">
                <div className="mobile_scroll">
                  {
                    this.state.swipeCsvData !== undefined ? this.state.swipeCsvData.map((head, i) => {
                      return (
                        <div className={this.state.activePopup == i ? "rank_mobile rank Active" : "rank_mobile rank"} id="h-left">

                          <ul id="slide_effect">

                            <li className="rank-li2 rank-li2Mobile" ><span className="rank-number">{i + 1} </span><a href="#" onClick={this.getSlideNumber.bind(this, i, this.state.swipeCsvData.length)} className="btn rank-btn">{this.state.swipeCsvData[i][11].head}</a>
                            </li>
                          </ul>

                        </div>
                      )
                    }) : ''
                  }
                </div>
              </Modal.Body>

            </Modal>

          </div>
        </div>
      )
    }
  }
}

export default Excellence;
