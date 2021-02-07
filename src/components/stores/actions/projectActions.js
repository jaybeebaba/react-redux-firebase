export const createProject = (project) =>{
    return(dispatch, getState, { getFirebase })=>{
        //perform an asyn operation
        const firestore = getFirebase().firestore();
        firestore.collection("projects").add({
            ...project,
            authorFirstName: "Net",
            authorLastName: "Ninja",
            authorID: 12345,
            createdAt: new Date()
             
        }).then(()=>{
            dispatch({type: "CREATE_PROJECT", project})
        }).catch((err)=>{
            dispatch({type: "CREATE_PROJECT_ERROR", err})
        })
      }

}