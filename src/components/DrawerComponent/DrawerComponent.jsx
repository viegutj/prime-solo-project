import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react';
import {Link} from "react-router-dom/cjs/react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";

function DrawerComponent() { // we are setting a piece of state to determine if the drawer is open
    const [open, setOpen] = useState(false);

    const list = () => (
        <div style={
                {width: 250}
            }
            onClick={
                () => setOpen(false)
        }>
            {/* this is a list of what is in our drawer */}
            <List> {
                [
                    <Link to="/user">
                        Home
                    </Link>,
                    <Link to="/savedworkouts">
                        Workouts
                    </Link>,
                    <Link to="/about">
                        About
                    </Link>,
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
            style={{float: 'right', color: "black", textDecoration: 'underline'}}
            onClick={
                () => {
                    setOpen(true)
                }
            }><MenuIcon/>
            </Button>
            <Drawer open={open}
                anchor={'right'}
                onClose={
                    () => setOpen(false)
            }>
                {
                list()
            } </Drawer>
        </div>
    )
}

export default DrawerComponent;
