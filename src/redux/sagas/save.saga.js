import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga, will be fired on "SET_NEW_WORKOUT" actions
function* saveWorkout(action){
    try{
        // communicate with server to POST data
        const response = yield axios.post('/api/create/', action.payload)

        // dispatch (put) an action to communicate with our reducer and update state
        yield put({type: "SET_NEW_WORKOUT", payload: response})

    }catch(error){
        console.log('POST request failed', error);
    }

}

// function that is listening for user action of "SAVE_WORKOUT"
function* saveSaga(){
    yield takeLatest("SAVE_WORKOUT", saveWorkout)
}

export default saveSaga;