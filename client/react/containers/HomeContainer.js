import React from 'react';
import Navbar from '../components/Navbar';

class HomeContainer extends React.Component {
	constructor(){
		super()
		this.state = {

		}
	}

	render(){
		return(
			<div>
			  <Navbar/>
				<h2>Home Page</h2>
				{this.props.children}
			</div>
		)
	}
}

export default HomeContainer;