import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";
import { useState } from "react";


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
        dispatch({type: 'GRAB_EDIT_DETAILS', payload: workout_details})
    }

    // function to send a dispatch every time there's a keystroke by the user for 'name'
    const handleNameChange = (event, propertyToChange) => {
        dispatch({
            type: 'EDIT_NAME_ONCHANGE',
            payload: {
                property: propertyToChange, // 'cohort'
                value: event.target.value // 'Diamon
            }
        })
    };

    return (
        <>
            <h1>Edit Workout</h1>
            <TextField 
                value={workout_details?.name} 
                id="outlined-basic"
                label="Workout Name"
                variant="outlined"
                type="text"
                onChange={(event) => handleNameChange(event, 'name')}
                name="Workout Name"
                />
            <TextField
                id="outlined-basic"
                label="Workout Rating"
                variant="outlined"
                type="text"
                name="Workout Name"
                value={
                    ''
                }
                onChange={(event) => handleNameChange(event, 'name')}/>
            <ol> {
                workout ?. map((exercise) => {
                    return (
                        <><div>
                            <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found"/>
                            {/* handler must have the specific exercise information passed to it */}
                            <Button onClick={
                                () => handleDelete(exercise)
                            }>
                                Delete Exercise
                            </Button>
                            <TextField
                            id="Notes"
                            label="Workout Notes"
                            multiline
                            rows={4}
                            defaultValue=""
                            />
                            <li key={
                                exercise ?. id
                            }>
                                Name: {
                                exercise ?. name
                            } </li>
                            ID: {
                            exercise ?. id
                        },
                                                    Muscle: {
                            exercise ?. muscle
                        },
                                                    Equipment: {
                            exercise ?. equipment
                        }
                            <p>Instructions: {
                                exercise ?. instructions
                            }</p>
                            </div>
                        </>
                    )
                })
            } </ol>
        </>
    )
}

export default EditWorkout;
