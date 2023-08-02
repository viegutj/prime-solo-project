import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga: will be fired on 'FETCH_WORKOUT' actions
function* fetchWorkout(action){
try{
    // bring in muscle with the 'action' payload
    // do a GET request to our server/router and store the response
    const response = yield axios.get(`/api/create/${action.payload.muscle}`)
    // dispatch an action of SET_WORKOUT to the reducer
    yield put({type: 'SET_WORKOUT', payload: response.data})

}catch(error){
    console.log('Create GET request failed', error);
}
}

function* createSaga(){
    yield takeLatest ('FETCH_WORKOUT', fetchWorkout);
}

export default createSaga;