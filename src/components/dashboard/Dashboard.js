import React, {Component} from 'react';
import Notifications from "./Notifications"
import ProjectList from "../projects/ProjectList"
import {connect} from "react-redux"

class Dashboard extends Component{

  
  render(){
    const {projects} = this.props
    // console.log(projects)
    return (
        
        <div className="mt-4 dashboard container"> 
            <div className="row">
                <div className="col-lg-7 mr-4">
                     <ProjectList projects={projects}/>    
                </div>

                <div className="col-lg-4">
                    <Notifications/>
                </div>

            </div>

        </div>
      
    );
  }
}

const mapStateToProps= (state) =>{
  return {
    projects: state.project.projects
  }

}

export default connect(mapStateToProps)(Dashboard);
