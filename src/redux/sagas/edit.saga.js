import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker function that UPDATES DATABASE with workout information
function* workerSubmitEditWorkout(action){
    console.log('in edit saga');
    try{
        yield console.log('in edit saga!');
        // yield statement to update the db
        yield axios.put(`/api/edit/${action.payload.workout_details.id}`, action.payload);
    }catch{
        console.log('PUT request failed', error);
    }
}



// function listening for 'SUBMIT_EDIT_WORKOUT', trigger worker saga
function* editSaga(){
    yield takeLatest('SUBMIT_EDIT_WORKOUT', workerSubmitEditWorkout);
}

export default editSaga;