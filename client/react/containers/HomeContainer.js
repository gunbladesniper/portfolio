import React from 'react';
import BioComponent from '../components/BioComponent';

class HomeContainer extends React.Component {
	constructor(){
		super()
		this.state = {
			name: 'Savaughn Jones',
			title: 'Software Engineer',
			hobbies: 'Table Top Game Designer',
			tagline: 'Creating enjoyable user experiences',
			img: ''
		}
	}

	render(){
		return(
			<div id='home-page'>
				<BioComponent name={this.state.name} title={this.state.title} hobby={this.state.hobies} image={this.state.img} tagline={this.state.tagline}/>
			</div>
		)
	}
}

export default HomeContainer;