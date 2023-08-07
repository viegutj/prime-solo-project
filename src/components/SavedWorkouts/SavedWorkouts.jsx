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

    // function to handle the back button
    const handleBack = () => {
        console.log('back button clicked!');
        history.push('/confirmworkout')
    }

    // function to handle the delete button
    const handleDelete = (workout) => {
        console.log('delete button clicked!');
        // confirm that we have passed the handler the correct workout
        console.log('workout is: ', workout);

        // dispatch an action TO THE SAGA to delete the specified workout
        dispatch({
            type: 'DELETE_WORKOUT',
            payload: workout
        })

        dispatch({type: 'FETCH_USER_WORKOUTS', payload: user.id})
    }

    return (
        <>
            <h1>Saved Workouts</h1>
            <Button onClick={handleBack}>Back</Button>
            <div> {
                workouts ?. map((workout) => {
                    return (
                        <ol>
                            <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found"/>
                            <li key={
                                workout.id
                            }>
                                Name: {
                                workout.id
                            }, Rating: {
                                workout.rating
                            }</li>
                            {/* handler must have the specific workout information passed to it */}
                            <Button onClick={() => {handleDelete(workout)}}>Delete</Button>
                        </ol>
                    )
                })
            } </div>
        </>
    )
}

export default SavedWorkouts;
