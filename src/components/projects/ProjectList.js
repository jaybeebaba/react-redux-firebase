import React, {Component} from 'react';
import ProjectSummary from "./ProjectSummary"
// import {Link} from "react-router-dom"

class ProjectList extends Component{
  
  

  render(){
    const {projects} = this.props;
      return(
        <div className="container">
          {projects && projects.map(project =>{
            return(
              <ProjectSummary project={project} key={project.id}/>
            )
            
          })}

        </div>
      )
    
  }
}


export default ProjectList
