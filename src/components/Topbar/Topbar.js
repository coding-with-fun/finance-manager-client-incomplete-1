/**
 * @author Harsh Patel @harsh2124
 */

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const TopBar = () => {
    return (
        <div className="topbar__container">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className="topbar_menu_icon"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className="topbar_header">
                        News
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;
