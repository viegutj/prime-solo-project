import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from '@mui/material';
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';


function CreateWorkout() { // this component doesn't do much to start, just renders some user reducer info to the DOM
    const dispatch = useDispatch();
    const history = useHistory();

    function handleDispatchWorkout(event) {
        event.preventDefault();
        // console.log('handler equipment', equipment);
        // console.log('handler muscle', muscle);
        // once our submit is clicked, dispatch an action
        // to send a GET request to the API and route client
        // to the "Confirm Workout" view
        dispatch({
            type: 'FETCH_WORKOUT',
            payload: {
                // equipment: equipment,
                muscle: muscle
            }
        })
        history.push('/confirmworkout')
    }
    const user = useSelector((store) => store.user);
    // creating local state for user inputs
    const [equipment, setEquipment] = useState((''));
    const [muscle, setMuscle] = useState((''));


    // event handler for equipment and muscle user inputs
    const handleEquipment = (event) => {
        setEquipment(event.target.value);
    }
    const handleMuscle = (event) => {
        setMuscle(event.target.value);
    }

    // console.log('equipment', equipment);
    // console.log('equipment', muscle);

    // return our html to render
    return (
        <div className="container">
            <form onSubmit={handleDispatchWorkout}>
                <h2>Welcome, {
                    user.username
                }!</h2>
                <h3>Select your muscle group. Press "Create" to create a workout!</h3>
                {/* <div>
                    <FormControl sx={
                            {
                                m: 1,
                                minWidth: 120
                            }
                        }
                        size="small">
                        <InputLabel>Equipment</InputLabel>
                        <Select labelId="equipment" id="equipment-select" 
                            required
                            value={equipment}
                            label="equipment"
                            onChange={handleEquipment}>
                            <MenuItem value={"body_only"}>Bodyweight</MenuItem>
                            <MenuItem value={"dumbbell"}>Dumbell</MenuItem>
                            <MenuItem value={"barbell"}>Barbell</MenuItem>
                        </Select>
                    </FormControl>
                </div> */}
                <div>
                    <FormControl sx={
                            {
                                m: 1,
                                minWidth: 120
                            }
                        }
                        size="small">
                        <InputLabel>Muscle</InputLabel>
                        <Select labelId="muscle" id="muscle-select" 
                            required
                            value={muscle}
                            label="muscle"
                            onChange={handleMuscle}>
                            <MenuItem value={"abdominals"}>Abdominals</MenuItem>
                            <MenuItem value={"abductors"}>Abductors</MenuItem>
                            <MenuItem value={"adductors"}>Adductors</MenuItem>
                            <MenuItem value={"biceps"}>Biceps</MenuItem>
                            <MenuItem value={"calves"}>Calves</MenuItem>
                            <MenuItem value={"chest"}>Chest</MenuItem>
                            <MenuItem value={"forearms"}>Forearms</MenuItem>
                            <MenuItem value={"glutes"}>Glutes</MenuItem>
                            <MenuItem value={"hamstrings"}>Hamstrings</MenuItem>
                            <MenuItem value={"lats"}>Lats</MenuItem>
                            <MenuItem value={"lower_back"}>Lower Back</MenuItem>
                            <MenuItem value={"middle_back"}>Middle Back</MenuItem>
                            <MenuItem value={"neck"}>Neck</MenuItem>
                            <MenuItem value={"quadriceps"}>Quadriceps</MenuItem>
                            <MenuItem value={"traps"}>Traps</MenuItem>
                            <MenuItem value={"triceps"}>Triceps</MenuItem>
                        </Select>
                    </FormControl>

                </div>

                <Button variant='contained' name="submit" type='submit' value='Submit'>Create</Button>
            </form>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default CreateWorkout;
