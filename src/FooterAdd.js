import axios from 'axios';
import React,{Component } from 'react';
import './App.css';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class FooterAdd extends Component{
	constructor(props){
		super(props);
     this.state ={
	selectedFile : '', input_text: '' };
}
fileSelectedHandler= event => {
	this.setState({
		selectedFile:event.target.files[0]
	})
}
 handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 };

fileUploadHandler= () => {
	var imPreview=document.getElementById('img-preview');
    var fileUpload=document.getElementById('file-upload');
    var imgEff=document.getElementById('img-affect');
    var lin=document.getElementById('li');
    var CL_URL='https://api.cloudinary.com/v1_1/dpau2au7b/upload';
    var CLOUDINARY_UPLOAD_PRESET='mt9qmxlv';
	var file=this.state.selectedFile;
    var w=this.state.input_text;
	var fromData=new FormData();
	fromData.append('file',file);
	fromData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);

	axios({
		url:CL_URL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded0'
		},
		data: fromData
	}).then(function(res){
		console.log(res);
		var v=res.data.secure_url;
		var split_by_slace=v.split("/");
		var index = 0; 
        
     var str="";
     
     var st="/"
     st=st.concat("l_text:Arial_45_bold:");
     st=st.concat(w);
     st=st.concat(",g_south,y_-40");
     
     while (index < v.length) { 
          console.log(v[index]);
          str=str.concat(v[index]); 
          index++; 
          if(index==49)
          	str=str.concat(st);

     }
     console.log(str);
     imPreview.src=v;
     imgEff.src=str;
     lin.href=str;

	}).catch(function(err){
		console.error(err);
	});
}
render(){
	return (
			<div className="FooterAdd">
			<Container>
                <Grid item xs={12}>
              <Card>
       			 <CardContent>
            		<Typography variant="body2" color="textSecondary" component="p">
                		Input image
            		</Typography>
            	<div class="card">
            <img src="https://i.imgur.com/TlpTkHH.png" id="img-preview"  height="100" width="250" />
            <label class="file-upload-container" for="file-upload">
            <input type="file" onChange={this.fileSelectedHandler} />
               
            </label>
             </div>
        </CardContent>
        <br />
			 <React.Fragment>
       <form>
         <label htmlFor="username">Enter the Image Header</label>
         <input
           type="text"
           name="input_text"
           value={this.state.input_text}
           onChange={this.handleChange}
         />

         
       </form>

       <h3>Your text is: {this.state.input_text}</h3>
       <br />
       
      </React.Fragment>
			

			<button onClick={this.fileUploadHandler}> Click to upload</button>
    </Card>
    
</Grid>
<Grid item xs={12}>
   <Card>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Output Image
            </Typography>
            <div class="card">
            <img src="https://i.imgur.com/zvxoxmd.gif" id="img-affect"  height="100" width="150" />
             <label class="file-upload-container" >
             <a id="li" href="#" > Download the modified image</a>
           </label>
    </div>
        </CardContent>
    </Card> 
</Grid>

 </Container>
			</div>
		);
}
}

export default FooterAdd;