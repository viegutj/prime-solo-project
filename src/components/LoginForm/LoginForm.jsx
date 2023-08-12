import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Button, Typography, Input, TextField, Box, FormControl} from '@mui/material';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(store => store.errors);
    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password
                }
            });
        } else {
            dispatch({type: 'LOGIN_INPUT_ERROR'});
        }
    }; // end login

    return (
        <FormControl
        sx={{m:3}}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        >
        <form 
            onSubmit={login}>

            <Typography 
            variant="h1" 
            sx={{fontSize: 50}}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            >
                MN Fitness
            </Typography>

            {
            errors.loginMessage && (
                <Typography 
                className="alert" 
                role="alert">
                    {
                    errors.loginMessage
                } </Typography>
            )
        }
            <Box>
                <TextField id="outlined-basic" label="username" variant="outlined" type="text" name="username" required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
            </Box>
            <Box>
                <TextField id="outlined-basic" label="password" variant="outlined" type="password" name="password" required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
            </Box>
            <Box>
                <Button variant="contained" type="submit" name="submit" value="Log In">
                    Log In
                </Button>
            </Box>
        </form>
        </FormControl>
    );
}

export default LoginForm;
