import {useDispatch, useSelector} from "react-redux";
import { Button } from "@mui/material";

function EditWorkout() { // grab workout details from state
    const workout = useSelector((store) => store.specificWorkout.server_response)
    const workout_details = useSelector((store) => store.specificWorkout.workout_details)
    const dispatch = useDispatch();

    // function to handle the delete button
    const handleDelete = (exercise) => {
        console.log('delete exercise button clicked')
        
        // confirm that we have passed the handler the correct exercise
        console.log('exercise is: ', exercise);

        // dispatch an action TO THE SAGA to delete the specified exercise
        dispatch({type: 'DELETE_EXERCISE', payload: exercise})

        // dispatch an action to GET workout from our database,
        // with the delete changes we just made
        // dispatch({type: 'GRAB_EDIT_DETAILS', payload: exercise})
    }

    return (
        <>
            <h1>Edit Workout</h1>
            <h2>Workout Name: {workout_details.name}</h2>
            <h3>ID: {workout_details.id}</h3>
            <h3>Rating: {workout_details.rating}</h3>

            {
            workout?.map((exercise) => {
                return (
                    <>
                    <ol>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found"/>
                        <li key={exercise?.id}>
                            Name: {exercise ?. name}
                        </li>
                            ID: {exercise ?. id},
                            Muscle: {exercise?.muscle},
                            Equipment: {exercise?.equipment}
                            <p>Instructions: {exercise ?. instructions}</p>
                        {/* handler must have the specific exercise information passed to it */}

                        <Button 
                        onClick={() => handleDelete(exercise)}>
                            Delete Exercise
                        </Button>
                    </ol>
                    </>
                )
            })
        } </>
    )
}

export default EditWorkout;
