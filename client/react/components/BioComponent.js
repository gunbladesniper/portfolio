import React from 'react';

const BioComponent =(props)=>{
	return(
		<div id='bio-component'>
			<img className='bio-image' src={props.image}/>
			<span className='bio-name'>{props.name}</span>
			<span className='bio-title'>{props.title}</span>
			<span className='bio-hobby'>{props.hobby}</span>
			<span className='bio-tagline'>{props.tagline}</span>
		</div>
	)
}

export default BioComponent;