import { put, takeLatest } from 'redux-saga/effects';

// worker saga for saveDetails
function* saveDetails(action){
    try{
        yield put ({type: "SET_DETAILS", payload: action.payload})
    }catch(error){
        console.log('Saga for saveDetails failed');
    }
}

// function that is listening for user action of "SAVE_WORKOUT"
function* detailsSaga(){
    yield takeLatest("STORE_DETAILS", saveDetails)
}

export default detailsSaga;