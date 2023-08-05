import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ExerciseDetails() {
    const history = useHistory();
    const details = useSelector((store) => store.details)
    // console.log('details: ', details);


    return(
        <>
        <h1>Exercise Details</h1>
        <h2>{details.name}</h2>
        <ul>
            <li>Muscle: {details.difficulty}</li>
            <li>Type: {details.type}</li>
            <li>Equipment: {details.equipment}</li>
            <li>Difficulty: {details.difficulty}</li>
            <li>Instructions: {details.instructions}</li>
        </ul>
        <Button onClick={() => history.push('/confirmworkout')}>Back to Workout</Button>


        </>
    )
}

export default ExerciseDetails;