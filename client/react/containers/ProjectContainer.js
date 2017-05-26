import React from 'react';
import axios from 'axios';

class ProjectContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){
		var projectId = this.props.match.url.slice(-1);
		if(projectId > 0 && projectId < 5){
			axios.get(`/getProject/${projectId}`)
			.then((res)=>{
					this.setState(res.data);
			})
			.catch((err)=>{
				throw new Error(err);
			})
		}
	}

	render(){
		return(
			<div>
				<h2>Project Page</h2>
				<span> {this.state.title}</span>
				<span> {this.state.videoUrl}</span>
				{this.state.websiteUrl && <span> {this.state.websiteUrl}</span>}
				<span> {this.state.description}</span>
			</div>
		)
	}
}

export default ProjectContainer;