import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImagesOpsContainer from './Container/ImageOps';
import HeaderAdd from './HeaderAdd';
import Nav from './Nav';
import FooterAdd from './FooterAdd';
import Resize from './Resize';
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
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
function App() {
  return (

    <Router>
    <div className="App">
       <Nav />
       <Switch>
       <Route path="/" exact component={Home} /> 
       <Route path="/Resize" component={Resize} />
       <Route path="/HeaderAdd" component={HeaderAdd} />
       <Route path="/FooterAdd" component={FooterAdd} />
       </Switch>
    </div>
    </Router>
  );
}
const Home = () => (
     <div class="home">
     <Button  color="Secondary">
     <h1>Welcome To Home Page</h1>
</Button> 
      <ul class="b-Links">
          <Link  to="/Resize">
           <li> <Button variant="contained" color="primary" href="#">
  Resize_Img
</Button> </li>
        </Link>
        <Link to="/HeaderAdd">
          <li> <Button variant="contained" color="primary" href="#">
  Add Header
</Button> </li>
        </Link>
        <Link  to="/FooterAdd">
          <li><Button variant="contained" color="primary" href="#">
  Add Footer
</Button></li>
        </Link>
       </ul>
      </div>
  ); 
export default App;
