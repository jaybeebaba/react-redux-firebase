import authReducer from "./AuthReducer"
import projectReducer from "./ProjectReducer"
import {combineReducers} from "redux"
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth: authReducer,
    project: projectReducer
    
})

export default rootReducer

