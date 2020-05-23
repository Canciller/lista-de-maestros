import React from 'react';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import View from 'components/View';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import PropTypes from 'prop-types';

class NotFound extends React.Component {
    render() {
        const { history } = this.props;

        return (
            <View flex direction="column">
                <div
                    style={{
                        margin: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Icon icon={faSadCry} size="16em" />
                    <Typography
                        component="h1"
                        style={{
                            fontSize: '8em',
                            userSelect: 'none',
                        }}
                    >
                        404
                    </Typography>
                    <Button fullWidth onClick={() => history.goBack()}>
                        Regresar
                    </Button>
                </div>
            </View>
        );
    }
}

NotFound.propTypes = {
    history: PropTypes.object.isRequired,
};

export default NotFound;
