import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Typography, List, ListItem} from "@mui/material";
import {useHistory} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function SavedWorkouts() { // grab the user id from store
    const user = useSelector((store) => store.user)
    const workouts = useSelector((store) => store.workouts)
    const dispatch = useDispatch();
    const history = useHistory();


    // GET the workouts from our database
    useEffect(() => {
        dispatch({type: 'FETCH_USER_WORKOUTS', payload: user.id})
    }, []);


    // function to handle the delete button
    const handleDelete = (workout) => {
        console.log('delete button clicked!');
        // confirm that we have passed the handler the correct workout
        console.log('workout is: ', workout);

        // if the user confirms the delete, continue delete.
        if(confirm(`Are you sure you would like to delete ${workout.name}?`) == true){
            // dispatch an action TO THE SAGA to delete the specified workout
            dispatch({type: 'DELETE_WORKOUT', payload: workout})
    
            // dispatch an action to GET workout from our database,
            // with the delete changes we just made
            dispatch({type: 'FETCH_USER_WORKOUTS', payload: user.id})
        }
    }

    const handleEditWorkout = (workout) => {
        console.log('edit workout clicked!');
        console.log('workout is: ', workout);

        // dispatch an action TO THE SAGA to GET the exercises for this specific workout
            // then, store the exercise information in state
        dispatch({type: 'GRAB_EDIT_DETAILS', payload: workout})


        history.push('/editworkout');
    }

    return (
        <>
        <Box
        sx={{m:3}}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        >
            <Typography 
            variant="h1"
            sx={{fontSize: 50}}
            >
                Saved Workouts
            </Typography>

            <Typography
            sx={{fontSize: 18}}
            >
                Click the workout to edit!
            </Typography>
        </Box>
        <Box
        sx={{m:3}}
        textAlign="center"
        >
            <List
            >
            {workouts?.map((workout) => {
                return (
                        <Box 
                        sx={{mb: 4}}
                        component={Typography}
                        >
                            <ListItem 
                            sx={{fontSize: 18}}
                            key={workout?.id} 
                            >
                                <span onClick={() => handleEditWorkout(workout)} style={{textDecoration: "underline"}}>Name: {workout?.name},  Rating: {workout?.rating}</span>
                            <Button 
                            sx={{ml: 3}}
                            variant="contained"
                            onClick={() => {handleDelete(workout)}}
                            >
                                <DeleteIcon/>
                            </Button>
                            </ListItem>

                        </Box>
                        )
            })}
            </List>
        </Box>
        </>
    )
}

export default SavedWorkouts;
