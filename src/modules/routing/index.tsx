import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ConsolidatedView from '../dashboard/consolidated-view/ConsolidatedView';
import MiniDrawer from '../shared/drawer/drawer';
import Header from '../shared/header/Header';

interface IRouting {}

const Routing = (props: IRouting) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <MiniDrawer/>
            <ConsolidatedView/>
        </React.Fragment>
    )
}

export default Routing;