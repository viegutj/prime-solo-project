import {useDispatch, useSelector} from "react-redux";
import {Button, TextField, Typography, Box} from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';


function EditWorkout() { // grab server_response details from state
    const server_response = useSelector((store) => store.specificWorkout.server_response)
    const workout_details = useSelector((store) => store.specificWorkout.workout_details)
    const workoutToEdit = useSelector((store) => store.specificWorkout)
    const dispatch = useDispatch();
    const history = useHistory();

    // function to handle the delete button
    const handleExerciseDelete = (exercise) => {
        console.log('delete exercise button clicked')

        // confirm that we have passed the handler the correct exercise
        console.log('exercise is: ', exercise);

        // dispatch an action TO THE SAGA to delete the specified exercise
        dispatch({type: 'DELETE_EXERCISE', payload: exercise})

        // dispatch an action to GET server_response from our database,
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
                    // table "server_response" columns "name" and "rating"
                    // table "exercise" column "notes"
                        // How can we match id in our array for exercise name and rating?
                            // how do we access exercise.id?
                property: propertyToChange, // 'name' or 'rating'
                value: event.target.value // whatever the user types in, dispatched every keystroke
            }
        })
    };

    //function to send a dispatch every time there's a keystroke for 'notes'
    const handleExerciseChange = (event, exercise, propertyToChange) => {
        console.log('event: ', event);
        console.log('exercise: ', exercise);
        dispatch({
            type: 'EDIT_EXERCISE_ONCHANGE',
            payload: {
                property: propertyToChange,
                value: event.target.value,
                exercise: exercise
            }
        })
    }

    const handleSaveChanges = (event) => {
        // event.preventDefault();

        // dispatch an action that is being listened for by a saga
        dispatch({ type: 'SUBMIT_EDIT_WORKOUT', payload: workoutToEdit });
        alert('Changes to the workout have been saved!')
        history.push('/savedworkouts')
    }

    const handleBack = () => {
        console.log('back button clicked!');
        if(confirm('Are you sure you would like to abandon your changes?') == true){
            history.push('/savedworkouts')
        }
        
    }

    return (
        <>
            <Typography 
            variant="h1" 
            sx={{fontSize: 50, m: 3, mb:3}}
            textAlign="center"
            >
                Edit Workout
            </Typography>
            
            <form>

            <Box
            sx={{
                mb: 4, 
            }}
            textAlign="center"
            >
            <TextField 
                value={workout_details?.name} 
                id="Workout Name"
                label="Workout Name"
                variant="outlined"
                type="text"
                onChange={(event) => handleWorkoutChange(event, 'name')}
                name="Workout Name"
                fontSize="230"
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
                </Box>

            <ol> {
                server_response?.map((exercise) => {
                    return (
                        
                        <Box 
                        sx={{m:1, mb: 3, fontSize: 18}}
                        textAlign="center"
                        key={exercise?.id}
                        >
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
                            value={exercise.notes}
                            onChange={(event) => handleExerciseChange(event, exercise, 'notes')}
                            />
                            
                            <Button 
                            sx={{ml: 1, borderBottom: 'none'}}
                            variant="contained"
                            onClick={() => {handleExerciseDelete(exercise)}}
                            >
                                <DeleteIcon />
                            </Button>
                            {/* create a modal to store/show this information - break modal into another component */}
                            {/* ID: {exercise?.id}, Muscle: {exercise?.muscle}, Equipment: {exercise?.equipment}
                            <p>Instructions: {exercise?.instructions}</p> */}
                            </Box>
                        
                    )
                })
            } </ol>
            <Box
            textAlign="center"
            >
            <Button 
            variant='contained' 
            onClick={handleBack} 
            sx={{mb: 2, mt: 2}}
            >
                <KeyboardBackspaceIcon />Back to Saved Workouts
            </Button>
            <br />
            <Button 
            onClick={() => handleSaveChanges(event)}
            variant='contained'
            >
                Save Changes
            </Button>
            </Box>
            </form>
        </>
    )
}

export default EditWorkout;
