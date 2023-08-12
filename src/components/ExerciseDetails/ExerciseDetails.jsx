import { Button, List, ListItem, Typography, capitalize, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function ExerciseDetails() {
    const history = useHistory();
    const details = useSelector((store) => store.details)
    // console.log('details: ', details);


    return(
        <>
        <Typography 
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        variant="h1"
        sx={{mt: 2, mb: 0, fontSize: 50}}
        >
            Exercise Details
        </Typography>

        <Typography
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        variant="h2"
        sx={{mt: 2, mb: 0, fontSize: 30}}
        >
            {details.name}
        </Typography>

        <Box
        sx={{m: 1}}
        // justifyContent="center"
        // textAlign="center"
        >
        <Typography

            sx={{fontSize: 18, m: 2}}
            textTransform="capitalize"
            >
                <span style={{fontWeight: "bold"}}>Muscle:</span> {details.muscle}
        </Typography>

        <Typography
        sx={{fontSize: 18, m: 2}}
        textTransform="capitalize"
        >
            <span style={{fontWeight: "bold"}}>Type:</span> {details.type}
        </Typography>
        
        <Typography
        sx={{fontSize: 18, m: 2}}
        textTransform="capitalize"
        >
            Equipment: {details.equipment}
        </Typography>
        
        <Typography
        sx={{fontSize: 18, m: 2}}
        textTransform="capitalize"
        >
            Difficulty: {details.difficulty}
            </Typography>
        
        <Typography
        sx={{fontSize: 18, m: 2}}
        >
            Instructions: {details.instructions}
        </Typography>

        </Box>

        <Box
        textAlign="center"
        >
            <Button 
            variant='contained' 
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            onClick={()=> history.push('/confirmworkout')} 
            sx={{mb: 2, mt: 2}}
            >
                <KeyboardBackspaceIcon />Back to Confirm Workout
            </Button>
        </Box>


        </>
    )
}

export default ExerciseDetails;