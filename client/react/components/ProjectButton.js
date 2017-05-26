import React from 'react';
import {Link} from 'react-router-dom';

const ProjectButton =(props)=>{
	return(
		<div className = 'project-button'>
			<span>{props.title}</span>
			<Link to={`projects${props.link}`}>
					<img className='project-image' src={props.image}/>
			</Link>
		</div>
	)
}

export default ProjectButton;