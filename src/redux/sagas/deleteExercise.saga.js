import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga will communicate with backend
function* removeExercise(action){
    console.log('in the removeExercise saga', action);
try{
    // bring in workout with the 'action' payload
    //  console.log('action.payload: ', action.payload);
    // do a DELETE request to our server/router
    yield axios.delete(`/api/edit/${action.payload.id}`);

}catch(error){
    console.log('removeExercise saga DELETE request failed', error);
}
}

// listener saga will listen for user action
function* deleteExercise(){
    console.log('in deleteWorkout');
    yield takeLatest('DELETE_EXERCISE', removeExercise);
}

export default deleteExercise;