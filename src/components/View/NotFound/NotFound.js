import React from 'react';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import View from 'components/View';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Routes from 'routes';

class NotFound extends React.Component {
    render() {
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
                    <Typography>
                        <Link 
                        to={Routes.home.path}
                        style={{
                            color: 'inherit',
                            fontSize: '1.2em',
                        }}>
                            Regresar al inicio
                        </Link>
                    </Typography>
                </div>
            </View>
        );
    }
}

export default NotFound;
