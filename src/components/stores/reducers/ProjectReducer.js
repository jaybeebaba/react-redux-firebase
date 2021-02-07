const initState = {
    projects:[
        {id: 1, title: "Hello there", content: "blah blah blah blah"},
        {id: 2, title: "Hello there2", content: "blah blah blah blah2"},
        {id: 3, title: "Hello there3", content: "blah blah blah blah2"}

    ]
}

const projectReducer = (state={}, action) =>{
    // if(action.type==="CREATE_PROJECT"){
    //     console.log(action.type)
    // }
    //we can also use the switch statement for this

    switch(action.type){
        case "CREATE_PROJECT":{
            console.log("Created a project")
            return state}
        case "CREATE_PROJECT_ERROR":
            return action.err
        default:
            return state
    }
    // return state
}

export default projectReducer