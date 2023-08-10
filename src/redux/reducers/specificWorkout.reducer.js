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
        case 'EDIT_EXERCISE_ONCHANGE':
                
                return {
                    // break apart our state with the spread operator
                    ...state,
                    // access the server_response array (within our current slice of state)
                    server_response: 
                    // loop through every exercise in our array, with a 
                    // conditional checking for id matching
                    state.server_response.map((exercise) => {
                        if(exercise.id == action.payload.exercise.id){
                            return {
                                ...exercise,
                                [action.payload.property]: action.payload.value
                            }
                        // if the exercise does not match, return the exercise with no changes
                        } else{
                            return exercise
                        }
                    })
                }

        default:
            return state
    }
}

export default specificWorkoutReducer;