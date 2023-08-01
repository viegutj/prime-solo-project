import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Button, Typography, Input, TextField} from '@mui/material';


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
        <form className="formPanel"
            onSubmit={login}>
            <Typography variant="h4">MN Fitness</Typography>
            {
            errors.loginMessage && (
                <h3 className="alert" role="alert">
                    {
                    errors.loginMessage
                } </h3>
            )
        }
            <div>
                <TextField id="outlined-basic" label="username" variant="outlined" type="text" name="username" required
                    value={username}
                    onChange={
                        (event) => setUsername(event.target.value)
                    }/>
            </div>
            <div>
                <TextField id="outlined-basic" label="password" variant="outlined" type="password" name="password" required
                    value={password}
                    onChange={
                        (event) => setPassword(event.target.value)
                    }/>
            </div>
            <div>
                <Button variant="contained" type="submit" name="submit" value="Log In">
                    Log In</Button>
            </div>
        </form>
    );
}

export default LoginForm;
