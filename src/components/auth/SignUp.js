import React, { Component } from 'react'

class SignUp extends Component {
    state={
        
    }

    handleChange = (e) =>{
        this.setState({
            
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="mx-auto"><h1 className="mx-auto" >Sign In</h1></div>
                
        
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <input className="form-control mt-5" type="text" name="firstname" placeholder="First Name" onChange={this.handleChange}/>
                    <input className="form-control mt-5" type="text" name="lastname" placeholder="Lastg Name" onChange={this.handleChange}/>
                    <input className="form-control mt-5" type="text" name="email" placeholder="email" onChange={this.handleChange}/>
                    <input className="form-control mt-5" type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    <input className="form-control mt-5 btn btn-dark" type="Submit" />

                </form>
                
            </div>
        )
    }
}

export default SignUp
