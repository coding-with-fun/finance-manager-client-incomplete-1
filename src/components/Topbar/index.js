/**
 * @author Harsh Patel @harsh2124
 */

import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import SideBar from '../Sidebar';

const TopBar = ({ user }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event?.currentTarget || null);
    };

    const handleSideBar = flag => {
        setIsSideBarOpen(flag);
    };

    console.log(user);
    return (
        <div className="topbar__container">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className="topbar_menu_icon"
                        onClick={() => handleSideBar(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className="topbar_header">
                        Finance Manager
                    </Typography>

                    {!user.isAuthenticated && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                className="topbar_icon"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => handleMenu()}
                            >
                                <MenuItem onClick={() => handleMenu()}>Profile</MenuItem>
                                <MenuItem onClick={() => handleMenu()}>Sign Out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>

            <SideBar isSideBarOpen={isSideBarOpen} handleSideBar={handleSideBar} />
        </div>
    );
};

export default connect(state => {
    return {
        user: state.user,
    };
})(TopBar);
