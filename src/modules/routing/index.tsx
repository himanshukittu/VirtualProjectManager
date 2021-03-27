import React from 'react';
import ConsolidatedView from '../dashboard/consolidated-view/ConsolidatedView';
import Header from '../shared/header/Header';

interface IRouting {}

const Routing = (props: IRouting) => {
    return (
        <React.Fragment>
            <Header/>
            <ConsolidatedView/>
        </React.Fragment>
    )
}

export default Routing;