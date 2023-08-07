// this reducer takes in the dispatch (put) from our create.saga.js
const specificWorkoutReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_EDIT_DETAILS':
            // here, we are returning all the data we got from the api in our saga
            return action.payload
        default:
            return state
    }
}

// workout will be visible in the stat
// via state.create
export default specificWorkoutReducer;