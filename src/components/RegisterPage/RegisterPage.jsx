import React from 'react';

import {useHistory} from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import {Box, Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function RegisterPage() {
    const history = useHistory();

    return (
        <Box
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <RegisterForm/>
            <Button 
                variant='outlined' 
                type="button"
                onClick={() => {history.push('/login');}}
            >
                <KeyboardBackspaceIcon />
            </Button>
        </Box>
    );
}

export default RegisterPage;
