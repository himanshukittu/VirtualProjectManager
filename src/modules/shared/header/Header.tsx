import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <IconButton edge="end">
                <AccountCircleTwoToneIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
    );
}

export default Header;