import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

function SavedWorkouts() {
    
    // grab the user id from store
    const user = useSelector((store) => store.user.id)
    const dispatch = useDispatch();

    


    // GET the workouts from our database
    useEffect(
        dispatch({
        type: 'FETCH_USER_WORKOUTS',
        payload: user,
        })
    );


    return(
        <h1>Saved Workouts</h1>
        // display the workouts from the database here
    )
}

export default SavedWorkouts;