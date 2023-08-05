import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga, will be fired on "FETCH_USER_WORKOUT" actions
function* fetchWorkouts(action){
    try{
        // communicate with server to GET data
        yield axios.get('/api/create/', action.payload);

        // dispatch (put) an action to communicate with our reducer and update state
            // reducer will be listening for "SET_USER_WORKOUTS"
        yield put({type: "SET_USER_WORKOUTS", payload: response});

    }catch(error){
        console.log('GET request failed', error);
    }

}

// function that is listening for user action of "FETCH_USER_WORKOUTS"
function* saveSaga(){
    yield takeLatest("FETCH_USER_WORKOUTS", fetchWorkouts);
}

export default saveSaga;