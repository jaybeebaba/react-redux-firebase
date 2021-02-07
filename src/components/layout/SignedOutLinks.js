import React from "react"
import {NavLink} from "react-router-dom"

function SignedOutLinks (){
    return(
        <div>
            <div className="mr-auto">
                <NavLink to="/signup" className="mr-3">SignUp</NavLink>
                <NavLink to="/signin" className="mr-3">Login</NavLink>
            </div>
        </div>
    )
}

export default SignedOutLinks