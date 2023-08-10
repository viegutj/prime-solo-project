import { put, takeLatest } from 'redux-saga/effects';





// -------------LECTURE CODE EXAMPLE SAGA-------------
// hold only the single student object being edited
// const studentToEdit = (state  = {}, action) => {
//     if (action.type === 'SET_EDIT_STUDENT') {
//         // Represents a student object
//         return action.payload;
//     }
//     if (action.type === 'EDIT_ONCHANGE') {
//         // Action.payload: { property: 'cohort', value: 'Diamon' }
//         return {
//             ...state,
//             // 'first_name'
//             // or 'last_name'
//             [action.payload.property]: action.payload.value
//             // cohort: 'Diamon'
//         }

//         /**
//          * return {
//          *    ...state,
//          *      first_name: 'Liz'
//          * }
//          */

//     }
//     return state;
// }


// worker function that UPDATES DATABASE



// function listening for user dispatched actions
// function* editSaga(){
//     yield takeLatest('EDIT_ONCHANGE', editAll);
// }
// export

export default editSaga;