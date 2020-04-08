import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import { withTheme } from 'components/Theme';
import './Review.scss';

class Review extends React.Component {
    render() {
        const { theme, data, ...props } = this.props;

        if (!data || !data.user || !data.maestro) return '';

        return (
            <div
                className="Review-root"
                style={{
                    borderColor: data.recommended
                        ? theme.colors.green.normal
                        : theme.colors.red.normal,
                    background: theme.background.normal,
                }}
            >
                <Typography component="h3" className="Review-datos-user">
                    <span>{data.user.username}</span>
                </Typography>
                <div className="Review-descripcion">
                    <Typography>{data.text}</Typography>
                </div>
                <div className="Review-datos-materia">
                    <Typography>Maestro: {data.maestro.name}</Typography>
                    <Typography>Materia: {data.materia}</Typography>
                    <Typography>
                        {data.hour}, {data.date}
                    </Typography>
                </div>
            </div>
        );
    }
}

Review.propTypes = {
    theme: PropTypes.object.isRequired,
    data: PropTypes.object,
};

export default withTheme(Review);
