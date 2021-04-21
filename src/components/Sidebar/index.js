/**
 * @author Harsh Patel @harsh2124
 */

import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { Home as HomeIcon, Settings as SettingsIcon } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const commonListIcons = [
    {
        icon: <HomeIcon />,
        name: 'Home',
        value: 'home',
        route: '/',
    },
];
const unauthenticatedListItems = [];
const authenticatedListItems = [
    {
        icon: <SettingsIcon />,
        name: 'Settings',
        value: 'settings',
        route: '/settings',
    },
];

const SideBar = ({ user, isSideBarOpen, handleSideBar }) => {
    const sideBarItems = user.isAuthenticated
        ? [...commonListIcons, ...authenticatedListItems]
        : [...commonListIcons, ...unauthenticatedListItems];

    return (
        <div>
            <Drawer anchor="left" open={isSideBarOpen} onClose={() => handleSideBar(false)}>
                <div
                    className="sidebar_list dark_theme"
                    role="presentation"
                    onClick={() => handleSideBar(false)}
                >
                    <List>
                        {sideBarItems.map(item => (
                            <Link to={item.route} key={item.value}>
                                <ListItem button>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>

                    <Divider />

                    {user.isAuthenticated ? (
                        <div className="sidebar_button_container">
                            <Link to="/">
                                <Button variant="outlined" color="primary" disableElevation>
                                    Sign Out
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="sidebar_button_container">
                            <Link to="/signin">
                                <Button variant="contained" color="primary" disableElevation>
                                    Sign In
                                </Button>
                            </Link>

                            <Link to="/signup">
                                <Button variant="outlined" color="primary">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default connect(state => {
    return {
        user: state.user,
    };
})(SideBar);
