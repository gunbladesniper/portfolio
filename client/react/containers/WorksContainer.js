import React from 'react';
import ProjectButton from '../components/ProjectButton';

class WorksContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      projects: [
        {
          title: 'Stackbear',
          image: 'http://www.macmillandictionaryblog.com/wp-content/uploads/2011/07/Small-Talk-image.jpg',
          projectPage:'1'
        },
        {
          title: 'Space Stomp',
          image: 'http://www.macmillandictionaryblog.com/wp-content/uploads/2011/07/Small-Talk-image.jpg',
          projectPage:'2'
        },
        {
          title: 'Poke4Dex',
          image: 'http://www.macmillandictionaryblog.com/wp-content/uploads/2011/07/Small-Talk-image.jpg',
          projectPage:'3'
        },
        {
          title: 'Fourth Thing',
          image: 'http://www.macmillandictionaryblog.com/wp-content/uploads/2011/07/Small-Talk-image.jpg',
          projectPage:'4'
        }
      ]
    }
  }

  render(){
    return(
      <div className ='project-button-holder'>
      {this.state.projects.map((project, index)=>{
        return <ProjectButton key={index} title={project.title} image={project.image} link={project.projectPage}/>
      })}
      </div>
    )
  }
}

export default WorksContainer;