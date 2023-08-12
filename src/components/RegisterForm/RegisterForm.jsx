import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TextField, Button, Typography, Box, FormControl} from '@mui/material';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const registerUser = (event) => {
        event.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: {
                username: username,
                password: password
            }
        });
    }; // end registerUser

    return (
        <Box
        sx={{m:3}}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        >

        <form onSubmit={registerUser}>
            
            <Typography 
            variant="h1" 
            sx={{fontSize: 50}}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            >
                Register
            </Typography>
            
            {errors.registrationMessage && (
                <Typography 
                sx={{m:3}}
                className="alert" 
                role="alert">
                    {errors.registrationMessage} 
                </Typography>
            )}

            <Box
            sx={{m:3}}
            >
                <TextField 
                
                    id="outlined-basic" 
                    label="username" 
                    variant="outlined" 
                    type="text" 
                    name="username"
                    value={username}
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </Box>
            <Box
            sx={{m:3}}
            >
                <TextField 
                    id="outlined-basic" 
                    label="password" 
                    variant="outlined" 
                    type="password" 
                    name="password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Box>
            <Box>
                <Button 
                    variant='contained' 
                    type="submit" 
                    name="submit" 
                    value="Register">
                    Register
                </Button>
            </Box>
        </form>
        </Box>
    );
}

export default RegisterForm;
