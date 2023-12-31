import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom/cjs/react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";

function DrawerComponent() { // we are setting a piece of state to determine if the drawer is open
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const list = () => (
        <div 
        style={{width: 250}}
        onClick={() => setOpen(false)
        }>
            {/* this is a list of what is in our drawer */}
            <List> {
                [
                    <Typography onClick={() => history.push('/')}> Home </Typography>,
                    <Typography onClick={() => history.push('/savedworkouts')}> Saved Workouts </Typography>,
                    <Typography onClick={() => history.push('/about')}> About </Typography>,
                    <LogOutButton/>
                ].map((label, index) => (
                    <ListItem button
                        key={index}>
                        {/* <ListItemIcon></ListItemIcon> */}
                        <ListItemText primary={label}/>
                    </ListItem>
                ))
            } </List>
        </div>

    )

    return (
        <div>
            <Button 
            style={{float: 'left', color: "white", textDecoration: 'underline'}}
            onClick={() => {setOpen(true)}}>
                <MenuIcon/>
            </Button>
            <Drawer 
            open={open}
            anchor={'left'}
            onClose={() => setOpen(false)}>
                {list()} 
            </Drawer>
        </div>
    )
}

export default DrawerComponent;
