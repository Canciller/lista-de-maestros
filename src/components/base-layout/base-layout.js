import React from 'react';

import Sidebar from './sidebar';
import './base-layout.scss';

class BaseLayout extends React.Component {
    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default BaseLayout;
