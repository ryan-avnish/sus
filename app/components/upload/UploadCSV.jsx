import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';

class UploadCSV extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.router = context.router;
    this.handleFiles = this.handleFiles.bind(this);
  }

  handleFiles(e) {
    e.preventDefault();
    var file    = this.refs.file.files[0];
    var reader  = new FileReader();
    reader.addEventListener("load", function () {
      ArticleStore.uploadcsv({"csvFile":reader.result}, this.router);
    }, false);

    if (file) {
      reader.readAsText(file);
    }
  }

  render() {
    return (
      <div className="inner">
                <div className="number_list">
                    <ul>
                        <li><span>1</span><b> Explore</b></li>
                        <li><span>2</span><b> Discover</b></li>
                        <li><span>3</span><b> Analyze </b></li>
                        <li><span>4</span><b> Perform</b></li>
                    </ul>
                </div>
               <div>                
               <form ref="uploadForm" id="csv" className="uploader" encType="multipart/form-data">
                   <input ref="file" type="file" name="file" className="upload-file"/>
                   <input type="button" ref="button" value="Upload" onClick={this.handleFiles}/>
               </form>                
            </div>
               
            </div>
    );
  }

}

UploadCSV.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UploadCSV;