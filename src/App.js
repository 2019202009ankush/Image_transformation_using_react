import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImagesOpsContainer from './Container/ImageOps';
import HeaderAdd from './HeaderAdd';
import Nav from './Nav';
import FooterAdd from './FooterAdd';
import Resize from './Resize';
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';

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
  <div>
  <p> Home </p>
  </div>
  ); 
export default App;
