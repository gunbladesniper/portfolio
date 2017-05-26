import React from 'react';
import NavButton from './NavButton';

const buttonData = [
{
	path: '/',
	label: 'Home',
	className:'navbar-button'
},
{
	path: '/works',
	label: 'Works',
	className:'navbar-button'
},
{
	path: '/about',
	label: 'About',
	className:'navbar-button'
},
{
	path: '/contact',
	label: 'Contact',
	className:'navbar-button'
}

];
const Navbar = (props)=>{
		return(
			<div id='navbar-container'>
        <div className='nav-spacer'></div>
				<ul id="navbar">
					{buttonData.map((data, index)=>{
						return <li key = {index}><NavButton key={index} path={data.path} label={data.label} className ={data.className}/></li>
					})}
				</ul>
        <div className='nav-spacer'></div>
			</div>
		)
}

export default Navbar;