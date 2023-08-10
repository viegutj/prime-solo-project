import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";
import { useState } from "react";


function EditWorkout() { // grab workout details from state
    const workout = useSelector((store) => store.specificWorkout.server_response)
    const workout_details = useSelector((store) => store.specificWorkout.workout_details)
    const dispatch = useDispatch();

    // function to handle the delete button
    const handleExerciseDelete = (exercise) => {
        console.log('delete exercise button clicked')

        // confirm that we have passed the handler the correct exercise
        console.log('exercise is: ', exercise);

        // dispatch an action TO THE SAGA to delete the specified exercise
        dispatch({type: 'DELETE_EXERCISE', payload: exercise})

        // dispatch an action to GET workout from our database,
        // with the delete changes we just made
        dispatch({type: 'GRAB_EDIT_DETAILS', payload: workout_details})
    }

    // function to send a dispatch every time there's a keystroke for 'name' and 'rating'
    const handleWorkoutChange = (event, propertyToChange) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_WORKOUT_ONCHANGE',
            payload: {
                // how do we access a property within a property?
                    // different individual object/array to access - need different dispatches?
                    // table "workout" columns "name" and "rating"
                    // table "exercise" column "notes"
                        // How can we match id in our array for exercise name and rating?
                            // how do we access exercise.id?
                property: propertyToChange, // 'name' or 'rating'
                value: event.target.value // whatever the user types in, dispatched every keystroke
            }
        })
    };

    //function to send a dispatch every time there's a keystroke for 'notes'
    const handleExerciseChange = (event, propertyToChange) => {
        dispatch({
            type: 'EDIT_EXERCISE_ONCHANGE',
            payload: {
                property: propertyToChange,
                value: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // dispatch an action that is being listened for by a saga
        dispatch({ type: 'SUBMIT_EDIT_WORKOUT', payload: workoutToEdit });

        history.push('/');
    }

    return (
        <>
            <h1>Edit Workout</h1>
            <TextField 
                value={workout_details?.name} 
                id="Workout Name"
                label="Workout Name"
                variant="outlined"
                type="text"
                onChange={(event) => handleWorkoutChange(event, 'name')}
                name="Workout Name"
                />
            <TextField
                id="Workout Rating"
                label="Workout Rating"
                variant="outlined"
                type="text"
                name="Workout Rating"
                value={workout_details?.rating ?? ''} 
                onChange={(event) => handleWorkoutChange(event, 'rating')}
                />
            <ol> {
                workout?.map((exercise) => {
                    return (
                        
                        <div key={exercise?.id}>
                            {/* <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found"/> */}
                            
                            {/* handler must have the specific exercise information passed to it */}
                            
                            {/* Text field that takes in notes, sends them to the handleChange function*/}
                            <li>
                                Name: {exercise?.name} 
                            </li>
                            {/* Consider adding the notes to the details modal */}
                            <TextField
                            id="Workout Notes"
                            label="Workout Notes"
                            multiline
                            rows={4}
                            value={workout_details?.notes ?? ''}
                            onChange={(event) => handleExerciseChange(event, 'notes')}
                            />
                            <Button onClick={
                                () => handleExerciseDelete(exercise)
                            }>
                                Delete Exercise
                            </Button>
                            {/* create a modal to store/show this information - break modal into another component */}
                            {/* ID: {exercise?.id}, Muscle: {exercise?.muscle}, Equipment: {exercise?.equipment}
                            <p>Instructions: {exercise?.instructions}</p> */}
                            </div>
                        
                    )
                })
            } </ol>
        </>
    )
}

export default EditWorkout;
