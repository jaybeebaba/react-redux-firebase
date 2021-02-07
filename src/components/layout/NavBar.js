import React from "react"
import {Link} from "react-router-dom"
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"

function Navbar (){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <Link to="/"><h1 className="text-white">MarioPlan</h1></Link>
            <SignedOutLinks/>
            <SignedInLinks/>
        </div>
    </nav>
    )
}

export default Navbar

