import React, { Component } from 'react';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import View from 'components/View';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from 'routes';

class Error extends Component {
    render() {
        const { error } = this.props;

        return (
            <View flex direction="column">
                <div
                    style={{
                        margin: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Icon
                        icon={faExclamationCircle}
                        size="16em"
                        variant="red"
                    />
                    <Typography
                        component="h1"
                        style={{
                            fontSize: '6em',
                            userSelect: 'none',
                        }}
                        color="red"
                    >
                        Error
                    </Typography>
                    <Typography
                        style={{
                            fontSize: '1.4em',
                            userSelect: 'none',
                        }}
                        color="red"
                    >
                        {error.message}
                    </Typography>
                    <Typography>
                        <Link
                            to={Routes.home.path}
                            style={{
                                color: 'inherit',
                                fontSize: '1.2em',
                            }}
                        >
                            Regresar al inicio
                        </Link>
                        <a
                            href="javascript:window.location.reload(true)"
                            style={{
                                color: 'inherit',
                                fontSize: '1.2em',
                                marginLeft: 10,
                            }}
                        >
                            Reintentar
                        </a>
                    </Typography>
                </div>
            </View>
        );
    }
}

Error.propTypes = {
    error: PropTypes.any.isRequired,
};

export default Error;
