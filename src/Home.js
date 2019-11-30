import axios from 'axios';
import React,{Component } from 'react';
import './App.css';
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



function Home(){
  const homeStyle = {
    color : 'white'
  };
  return (
      
      <h3> Home </h3>
      <ul class="nav-Links">
          <Link style={navStyle} to="/Resize">
           <li> <button> Resize  </button> </li>
        </Link>
        <Link style={navStyle} to="/HeaderAdd">
          <li> <button> Add Header </button> </li>
        </Link>
        <Link style={navStyle}  to="/FooterAdd">
          <li> <button>Add footer </button> </li>
        </Link>
       </ul>
      
    );
}

export default Home;