import React from 'react';
import { withTheme } from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Separator from 'components/BaseLayout/Sidebar/Separator';
import IconButton from 'components/IconButton';

import './Settings.scss';

class Settings extends React.Component {
    render() {
        const settings = this.props.theme.settings,
            onClose = this.props.onClose,
            width = this.props.width;

        return (
            <div
                className="Settings"
                style={{
                    ...settings,
                    width,
                }}
            >
                {width != 0 && (
                    <React.Fragment>
                        {' '}
                        <div className="Settings-section">
                            <IconButton
                                className="Settings-close"
                                icon={faTimes}
                                size="lg"
                                onClick={onClose}
                            />
                            <p
                                className="Settings-title"
                                style={settings.title}
                            >
                                Configuracion
                            </p>
                        </div>
                        <Separator style={settings.separator} />
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default withTheme(Settings);
