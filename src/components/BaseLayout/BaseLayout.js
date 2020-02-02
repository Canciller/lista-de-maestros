import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import './BaseLayout.scss';

class BaseLayout extends React.Component {
    render() {
        return (
            <div className="BaseLayout">
                <Sidebar></Sidebar>
                <div className="BaseLayout-main">
                    <Header></Header>
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default BaseLayout;
