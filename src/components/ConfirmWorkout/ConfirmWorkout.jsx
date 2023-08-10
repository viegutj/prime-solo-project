import {useDispatch, useSelector} from "react-redux"
import './ConfirmWorkout.css'
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";



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
        <Button onClick={handleBack}>Back</Button>
        <h1>Confirm Workout</h1>
        <h2>{workout?.[0]?.muscle}</h2>
        <ol>
            {workout?.map((exercise) => {
                return(
                    <>
                <div key={exercise?.id} onClick={() => handleDetails(exercise)}>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" alt="img not found" />
                    <li key={exercise?.name}>{exercise?.name}</li>
                </div>
                </>
                )
            })}
        </ol>
        <Button onClick={handleSave}>Save Workout</Button>
    </>
    )
}

export default ConfirmWorkout;
