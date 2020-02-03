import React from 'react';
import { withTheme } from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';
import './BaseLayout.scss';

class BaseLayout extends React.Component {
    render() {
        const content = this.props.theme.content;

        return (
            <div className="BaseLayout">
                <Sidebar></Sidebar>
                <div className="BaseLayout-main">
                    <Header></Header>
                    <div className="BaseLayout-content" style={content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTheme(BaseLayout);
