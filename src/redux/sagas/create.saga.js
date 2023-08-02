import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga: will be fired on 'FETCH_WORKOUT' actions
function* fetchWorkout(action){
try{

}catch{
    // how do I bring in the muscle and place it in the url?
    const response = yield axios({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/exercises?muscle=` + action.payload.muscle,
        headers: { 'X-Api-Key': API_KEY},
        contentType: 'application/json',
    })
    yield put({type: 'SET_WORKOUT', payload: response.data})
}
}

function* createSaga(){
    yield takeLatest ('FETCH_WORKOUT', fetchWorkout);
}

export default createSaga;