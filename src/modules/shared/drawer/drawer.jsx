import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const MiniDrawer = () => {
    const [expandDrawer, setExpandDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer variant="permanent" onMouseEnter={() => setExpandDrawer(true)} onMouseLeave={() => setExpandDrawer(false)}>
                <Divider />
                <List style={expandDrawer ? { width: 'max-content', paddingTop: '65px' } : { width: '65px', paddingTop: '65px' }}>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon/> 
                            </ListItemIcon>
                            {expandDrawer && <ListItemText primary={text}/>}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    )
}

export default MiniDrawer;