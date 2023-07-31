import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography } from '@mui/material';

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
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Typography variant='h4'>Register</Typography>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
      <TextField id="outlined-basic" label="username" variant="outlined" 
                  type="text"
                  name="username"
                  value={username}
                  required
                  onChange={(event) => setUsername(event.target.value)}/>
      </div>
      <div>
      <TextField id="outlined-basic" label="password" variant="outlined" 
                  type="password"
                  name="password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <div>
        <Button variant='contained' className="btn" type="submit" name="submit" value="Register" >Register</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
