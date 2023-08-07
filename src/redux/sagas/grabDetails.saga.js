import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga, will communicate with our backend to GET values AND our reducer to update state
function* getEditDetails(action){
try{
    // bring in the workout needed with our action.payload
    // GET request for workout details, save them in a 'response' variable
    const response = yield axios.get(`/api/edit/${action.payload.id}`);
    yield console.log('action.payload.id: ', action.payload.id);
    yield console.log('getEditDetails response.data is: ', response.data);

    // send a put to communicate with our reducer and update state
    yield put({type: "SET_EDIT_DETAILS", payload: response.data});
}catch(error){
    console.log('GET request failed', error);
}
}


// listener saga for 'GRAB_EDIT_DETAILS'
function* grabEditDetailsSaga(){
    yield takeLatest('GRAB_EDIT_DETAILS', getEditDetails);
}

export default grabEditDetailsSaga;