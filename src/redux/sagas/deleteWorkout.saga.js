import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga will communicate with backend
function* removeWorkout(action){
    //  console.log('in the removeWorkout saga', action);
try{
    // bring in workout with the 'action' payload
    //  console.log('action.payload: ', action.payload);
    // do a DELETE request to our server/router
    yield axios.delete(`/api/workouts/${action.payload.id}`);

}catch(error){
    console.log('removeWorkout saga DELETE request failed', error);
}
}

// listener saga will listen for user action
function* deleteWorkout(){
    console.log('in deleteWorkout');
    yield takeLatest('DELETE_WORKOUT', removeWorkout);
}

export default deleteWorkout;