import {useDispatch, useSelector} from "react-redux"
import './ConfirmWorkout.css'
import { useHistory } from "react-router-dom";
import { Box, Button, FormControl, Typography } from "@mui/material";



function ConfirmWorkout() { // import the created data from the API GET
    const workout = useSelector((store) => store.create);
    const user = useSelector((store) => store.user);
    // console.log('workout', workout);
    const history = useHistory();
    const dispatch = useDispatch();


    //function to handle details
    const handleDetails = (exercise) => {
        console.log('details click!');
        console.log('exercise: ', exercise);
        // dispatch an action to create a piece of state for details
            // we're not doing any server actions, so we can send this straight to reducer.
        dispatch({
            type: 'STORE_DETAILS',
            payload: exercise
        })
        // route the user to the Details component
        history.push('/exercisedetails')
    }
    
    // function to handle the save button (POST)
    const handleSave = () => {
        console.log('save button clicked!');
        // dispatch an action to saga, saga will communicate with db,
        // worker will communicate with reducer and update state
        dispatch({
            type: 'SAVE_WORKOUT',
            // we are sending the created workout as the payload
            payload: {
                workout: workout,
                user_id: user.id,
                history: history,
            }
        });
        // history.push('/savedworkouts');
    }
    // function to handle the back button
    const handleBack = () => {
        console.log('back button clicked!');
        history.push('/')
    }

    return (
    <>
        <FormControl
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{m: 3}} 
        >
        <Button variant='contained' onClick={handleBack}>Back</Button>
        <Typography 
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{m: 3}} variant="h2">
            Confirm Workout
        </Typography>
        <Typography 
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{m: 3}} variant="h3">
            {workout?.[0]?.muscle}
        </Typography>
        <Typography
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        >Click on an exercise name to access details!</Typography>
        <ol>
            {workout?.map((exercise) => {
                return(
                    <>
                <Box 
                // textAlign="center"
                sx={{textDecoration: "underline"}} key={exercise?.id} onClick={() => handleDetails(exercise)}>
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found" /> */}
                    <li key={exercise?.name}>{exercise?.name}</li>
                </Box>
                </>
                )
            })}
        </ol>
        <Button variant='contained' onClick={handleSave}>Save Workout</Button>
        </FormControl>
    </>
    )
}

export default ConfirmWorkout;
