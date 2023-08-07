import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga, will be fired on "FETCH_USER_WORKOUT" actions
function* fetchWorkouts(action){
    try{
        console.log('action.payload', action.payload);

        // communicate with server to GET data
        const response = yield axios.get(`/api/workouts/${action.payload}`);

        // dispatch (put) an action to communicate with our reducer and update state
            // reducer will be listening for "SET_USER_WORKOUTS"
        yield put({type: "SET_USER_WORKOUTS", payload: response.data});

    }catch(error){
        console.log('GET request failed', error);
    }
}

// function that is listening for user action of "FETCH_USER_WORKOUTS"
function* workoutsSaga(){
    yield takeLatest("FETCH_USER_WORKOUTS", fetchWorkouts);
}

export default workoutsSaga;