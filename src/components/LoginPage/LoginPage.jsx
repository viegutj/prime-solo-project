import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import {useHistory} from 'react-router-dom';
import {Box, Button} from '@mui/material';

function LoginPage() {
    const history = useHistory();

    return (
        <Box
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        >

            <LoginForm/>
                <Button variant='outlined' type="button"
                    onClick={() => {history.push('/registration')}}>
                    Register
                </Button>
        </Box>
    );
}

export default LoginPage;
