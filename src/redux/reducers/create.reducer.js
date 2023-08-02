// this reducer takes in the dispatch (put) from our create.saga.js
const createReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET WORKOUT':
            // here, we are returning all the data we got from the api in our saga
            return action.payload
        default:
            return state
    }
}

// workout will be visible in the stat
// via state.create
export default createReducer;