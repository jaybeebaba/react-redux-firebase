import React, { Component } from 'react'
import {createProject} from "../stores/actions/projectActions"
import {connect} from "react-redux" 
class CreateProject extends Component {
    state={
        
    }

    handleChange = (e) =>{
        this.setState({
            
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="mx-auto"><h1 className="mx-auto" >Create Project</h1></div>
                
        
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <input className="form-control mt-5" type="text" name="title" placeholder="title" onChange={this.handleChange}/>
                    <textarea className="form-control mt-5" type="text" name="content" placeholder="content" onChange={this.handleChange}></textarea>
                    <input className="form-control mt-5 btn btn-dark" type="Submit" />

                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project)=>{
            dispatch(createProject(project))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
