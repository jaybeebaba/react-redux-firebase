import React from "react"
// import projectReducer from "../stores/reducers/ProjectReducer"

function ProjectSummary({project}){
    return(
        <div className="container text-danger mt-5 ">
                <h3>{project.title}</h3>
                <p>Posted by Jaybee Baba</p>
                <div><b>Posted:</b> 3rd September, 2015 by <i>2am</i> </div>
            </div>
    )
}

export default ProjectSummary