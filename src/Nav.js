import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
function Nav(){
	const navStyle = {
		color : 'white'
	};
	return (
			<nav>
			<h3> LOGO </h3>
			<ul class="nav-Links">
			    <Link style={navStyle} to="/Resize">
			 		<li> Resize </li>
			 	</Link>
			 	<Link style={navStyle} to="/HeaderAdd">
			 		<li> Add Header</li>
			 	</Link>
			 	<Link style={navStyle}  to="/FooterAdd">
			 		<li> Add footer</li>
			 	</Link>
			 </ul>
			</nav>
		);
}

export default Nav;