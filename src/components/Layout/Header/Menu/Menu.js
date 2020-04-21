import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import User, { withUser } from 'components/User';
import { withRouter } from 'react-router-dom';
import Routes from 'routes';
import Typography from 'components/Typography';
import './Menu.scss';

class Menu extends React.Component {
    render() {
        const { theme, user, history } = this.props;

        return (
            <div
                className="Header-Menu-root"
                style={{
                    top: theme.layout.header.height,
                    left: 0,
                    background: theme.background.normal,
                    borderColor: theme.foreground.normal,
                    width: '100%',
                    borderRadius: 4
                }}
            >
                <Typography
                    onClick={() => {
                        user.signOut();
                        history.push(Routes.home.path);
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: 5
                    }}
                >
                    Salir
                </Typography>
            </div>
        );
    }
}

Menu.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(withUser(withTheme(Menu)));
