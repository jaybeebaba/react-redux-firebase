import React from "react"
import {firestoreConnect} from "react-redux-firebase"
import { connect } from "react-redux"
import { compose } from "redux"
import { Redirect } from "react-router-dom"
import moment from "moment"
import {deleteProject} from "../stores/actions/projectActions"


function ProjectDetails(props){
    const handleDelete = () =>{
        props.deleteProject(props.project)
    }
    console.log(props.project)
    if(!props.auth.uid) return <Redirect to="/signin"/>
    if(props.project){
        return(
            <div className="container project-details ">
                    <h3>{props.project.title}</h3>
                    <hr/>
                    <p>{props.project.content}</p>
                     <div>Created by: <i>{props.project.authorFirstName} {props.project.authorLastName}</i></div>
                    <div><b>Posted:</b> {moment(props.project.createdAt.toDate()).calendar()} </div>
                    <button className="btn btn-danger" onClick={()=>{handleDelete(props.project)}}>Delete</button>
                </div>
        )
    } else{
        return (
            <div className = "text-center text-warning"> loading project...</div>
        )
    }
   
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects.find(project=> project.id === id)
    // const project = projects ? projects[id] :  null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteProject: (project) => dispatch(deleteProject(project)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    firestoreConnect([
        {collection: "projects"}
    ]))(ProjectDetails)