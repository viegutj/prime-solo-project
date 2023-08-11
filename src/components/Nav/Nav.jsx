import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import {useSelector} from 'react-redux';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import { Box, Typography } from '@mui/material';

function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <Box 
        component={Typography} 
        className="nav">
                {
                user.id && (
                    <>
                        <Link to="/user">
                            <Typography 
                            className="nav-title"
                            >MN Fitness</Typography>
                        </Link>

                        <DrawerComponent/>
                    </>
                )
            }
        </Box>
    );
}

export default Nav;
