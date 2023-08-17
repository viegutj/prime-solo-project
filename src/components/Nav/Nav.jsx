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
        
            <img 
            style={{width: 40, height: 40}}
            src="data:image/png;base64,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"
            alt="" 
            />
            </IconButton>
            <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
            onClick={() => history.push('/')}
            >
            MN Fitness
            </Typography>
            {user.id && (
                <>
                <DrawerComponent/>
                </>
            )}
        </Toolbar>
        </AppBar>
    </Box>
    );
}

export default Nav;
