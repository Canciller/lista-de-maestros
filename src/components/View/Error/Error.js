import React, { Component } from 'react';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import View from 'components/View';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { Redirect } from 'react-router-dom';

class Error extends Component {
    render() {
        const { error, onRetry, onReturn } = this.props;

        if (error.status === 404) return <Redirect to="/404" />;

        return (
            <View flex direction="column">
                <div
                    style={{
                        margin: 'auto',
                        textAlign: 'center',
                        maxWidth: 256,
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
                    <div>
                        <Button
                            onClick={onReturn}
                            style={{
                                marginTop: 20,
                                marginRight: 8,
                            }}
                        >
                            Regresar
                        </Button>
                        <Button variant="green" onClick={onRetry}>
                            Reintentar
                        </Button>
                    </div>
                </div>
            </View>
        );
    }
}

Error.defaultProps = {
    onRetry: () => {},
    onReturn: () => {},
};

Error.propTypes = {
    error: PropTypes.any.isRequired,
    onRetry: PropTypes.func,
    onReturn: PropTypes.func,
};

export default Error;
