// // this reducer takes in the dispatch (put) from our create.saga.js
const specificWorkoutReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_EDIT_DETAILS':
            // here, we are returning all the data we got from the api in our saga
            return action.payload
        
        case 'EDIT_WORKOUT_ONCHANGE':
            // action.payload: {property: name, value: diamon}
            return {
                ...state,
                workout_details: {
                    ...state.workout_details,
                    [action.payload.property]: action.payload.value
                }
            }
//         case 'EDIT_EXERCISE_ONCHANGE':
//             if(){ // how do we write our conditional to match exercise.id?
//                 return {
//                     ...state,
//                     server_response[]: [
//                         ...state.server_response,
//                         [action.payload.property]: action.payload.value
//                     ]
                    
//                 }
//             } else{
//                 return state
//             }
        default:
            return state
    }
}

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
//     }
//     return state;
// }

// workout will be visible in the stat
// via state.create
export default specificWorkoutReducer;