import React from 'react';

import Sidebar from './Sidebar';
import './BaseLayout.scss';

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
