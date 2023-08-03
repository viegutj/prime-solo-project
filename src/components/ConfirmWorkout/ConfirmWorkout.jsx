import {useDispatch, useSelector} from "react-redux"
import './ConfirmWorkout.css'
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";



function ConfirmWorkout() { // import the created data from the API GET
    const workout = useSelector((store) => store.create);
    const history = useHistory();
    const dispatch = useDispatch();
    
    // function to handle the save button (POST)
    const handleSave = () => {
        console.log('save button clicked!');
        // dispatch an action to saga, saga will communicate with db,
        // worker will communicate with reducer and update state
        dispatch({
            type: 'SAVE_WORKOUT',
            // we are sending the created workout as the payload
            payload: workout
        })
    }
    // function to handle the back button
    const handleBack = () => {
        history.push('/')
    }

    return (
    <>
        <Button onClick={handleBack}>Back</Button>
        <h1>Confirm Workout</h1>
        <ol>
            {workout?.map((exercise) => {
                return(
                <>
                <img src="https://i.pinimg.com/550x/f9/52/6a/f9526a943772f04f69cda6bcdb5b1d00.jpg" alt="generic exercise" />
                <li>{exercise.name}</li>
                <ul>
                <li>{exercise.muscle}</li>
                <li>{exercise.equipment}</li>
                <li>{exercise.instructions}</li>
                </ul>
                </>
                )
            })}
        </ol>
        <pre>{JSON.stringify(workout)}</pre>
        <Button onClick={handleSave}>Save Workout</Button>
    </>
    )
}

export default ConfirmWorkout;
