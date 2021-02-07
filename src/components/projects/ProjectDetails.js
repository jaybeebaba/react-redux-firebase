import React from "react"
// import {withRouter} from "react-router-dom"

function ProjectDetails(props){
console.log(props.match.params.id)

    return(
        <div className="container project-details ">
                <h3>Project Title - {props.match.params.id}</h3>
                <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</p>
                <hr/>
                <div>Created by: <i>Jaybee Baba</i></div>
                <div><b>Posted:</b> 3rd September, 2015 by <i>2am</i> </div>
            </div>
    )
}

export default ProjectDetails