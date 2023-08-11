import React from 'react';

import {useHistory} from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import {Box, Button} from '@mui/material';

function RegisterPage() {
    const history = useHistory();

    return (
        <Box>
            <RegisterForm/>

            <center>
                <Button variant='outlined' type="button" className="btn btn_asLink"
                    onClick={
                        () => {
                            history.push('/login');
                        }
                }>
                    Login
                </Button>
            </center>
        </Box>
    );
}

export default RegisterPage;
