import React from 'react';
import { withTheme } from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';
import Settings from './Settings';

import './BaseLayout.scss';

class BaseLayout extends React.Component {
    state = {
        settingsWidth: 0,
    };

    render() {
        const content = this.props.theme.content;

        return (
            <div className="BaseLayout">
                <Sidebar />
                <Settings
                    width={this.state.settingsWidth}
                    onClose={e => this.setState({ settingsWidth: 0 })}
                />
                <div className="BaseLayout-main">
                    <Header
                        onSettingsClick={e =>
                            this.setState({ settingsWidth: 250 })
                        }
                    />
                    <div className="BaseLayout-content" style={content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTheme(BaseLayout);
