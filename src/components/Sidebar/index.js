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

const commonListIcons = [
    {
        icon: <HomeIcon />,
        name: 'Home',
        value: 'home',
    },
];
const unauthenticatedListItems = [];
const authenticatedListItems = [
    {
        icon: <SettingsIcon />,
        name: 'Settings',
        value: 'settings',
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
                    className="sidebar_list"
                    role="presentation"
                    onClick={() => handleSideBar(false)}
                >
                    <List>
                        {sideBarItems.map(item => (
                            <ListItem button key={item.value}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    {user.isAuthenticated ? (
                        <div className="sidebar_button_container">
                            <Button variant="outlined" color="primary" disableElevation>
                                Sign Out
                            </Button>
                        </div>
                    ) : (
                        <div className="sidebar_button_container">
                            <Button variant="contained" color="primary" disableElevation>
                                Sign In
                            </Button>

                            <Button variant="outlined" color="primary">
                                Sign Up
                            </Button>
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
