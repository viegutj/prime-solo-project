import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

function SavedWorkouts() { // grab the user id from store
    const user = useSelector((store) => store.user)
    const workouts = useSelector((store) => store.workouts)
    const dispatch = useDispatch();
    const history = useHistory();


    // GET the workouts from our database
    useEffect(() => {
        dispatch({type: 'FETCH_USER_WORKOUTS', payload: user.id})
    }, []);


    // function to handle the delete button
    const handleDelete = (workout) => {
        console.log('delete button clicked!');
        // confirm that we have passed the handler the correct workout
        console.log('workout is: ', workout);

        // dispatch an action TO THE SAGA to delete the specified workout
        dispatch({type: 'DELETE_WORKOUT', payload: workout})

        // dispatch an action to GET workout from our database,
        // with the delete changes we just made
        dispatch({type: 'FETCH_USER_WORKOUTS', payload: user.id})
    }

    const handleEditWorkout = (workout) => {
        console.log('edit workout clicked!');
        console.log('workout is: ', workout);

        // dispatch an action TO THE SAGA to GET the exercises for this specific workout
            // then, store the exercise information in state
        dispatch({type: 'GRAB_EDIT_DETAILS', payload: workout})


        history.push('/editworkout');
    }

    return (
        <>
            <h1>Saved Workouts</h1>
            <ol>
            {workouts?.map((workout) => {
                return (
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found"/>
                            <li key={workout?.id} onClick={() => handleEditWorkout(workout)}>
                                Name: {workout?.id},  Rating: {workout?.rating}
                            </li>
                            <Button onClick={
                                () => {handleDelete(workout)}
                            }>Delete</Button>
                            </div>
                            )
                        })}
            </ol>
        </>
    )
}

export default SavedWorkouts;
