import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Nav() {
    const user = useSelector((store) => store.user);
    const history = useHistory();
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
            >
            {user.id && (
                <>
                <DrawerComponent />
                </>
            )}
            </IconButton>
            <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
            onClick={() => history.push('/')}
            >
            MN Fitness
            </Typography>
        </Toolbar>
        </AppBar>
    </Box>
    );
}

export default Nav;
