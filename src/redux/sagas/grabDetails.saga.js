import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga, will communicate with our backend to GET values AND our reducer to update state
function* getEditDetails(action){
    // bring in the workout needed with our action.payload
    // GET request for workout details, save them in a 'response' variable
    const response = axios.get('/api/', )
}


// listener saga for 'GRAB_EDIT_DETAILS'
function* grabEditDetailsSaga(){
    yield takeLatest('GRAB_EDIT_DETAILS', getEditDetails)
}