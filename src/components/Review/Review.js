import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import { withTheme } from 'components/Theme';
import { CategoryStrings } from 'config/Strings';
import classNames from 'classnames';

import './Review.scss';

class TagBase extends React.Component {
    static propTypes = {
        theme: PropTypes.any.isRequired,
        children: PropTypes.any,
        variant: PropTypes.string,
        label: PropTypes.any,
    };

    render() {
        const {
            props: {
                children,
                theme: { colors, background, foreground },
                variant,
                label,
                ...props
            },
        } = this;

        const backgroundColor = colors[variant] || foreground;
        const color = colors[variant] || { foreground: background };

        return (
            <span
                style={{
                    background: backgroundColor.normal,
                    color: color.foreground.normal,
                    padding: '2px 5px',
                    borderRadius: 2,
                    display: 'inline-block',
                }}
                {...props}
            >
                {label && (
                    <span
                        style={{
                            marginRight: 4,
                        }}
                    >
                        {label}
                    </span>
                )}
                {children}
            </span>
        );
    }
}

const Tag = withTheme(TagBase);

class Review extends React.Component {
    render() {
        const {
            theme,
            review,
            maestro,
            children,
            style,
            className,
            ...props
        } = this.props;

        return (
            <div
                className={classNames('Review-root', className)}
                style={{
                    borderColor: theme.background.normal,
                    background: theme.background.normal,
                    ...style,
                }}
                {...props}
            >
                <div className="Review-descripcion">
                    <Typography>Comentarios</Typography>
                    <Typography style={{
                        fontSize: '0.9em'
                    }}>{children}</Typography>
                </div>
                <div className="Review-data" style={{
                    marginBottom: 8
                }}>
                    <Typography>
                        Maestro: {[maestro.firstname, maestro.lastname].join(' ')}
                    </Typography>
                    <Typography>Materia: {review.materia}</Typography>
                    <Typography
                    >
                        Fecha: {review.createdAt}
                    </Typography>
                </div>
                    <div
                    >
                        {Object.keys(review).map(key => {
                            if (!(key in CategoryStrings)) return;
                            return (
                                <span
                                    key={key}
                                    style={{
                                        margin: 2,
                                        display: 'inline-block'
                                    }}
                                >
                                    <Tag>
                                        {CategoryStrings[key]}:{' '}
                                        {review[key].toFixed(1)}
                                    </Tag>
                                </span>
                            );
                        })}
                    </div>
                </div>
        );
    }
}

Review.defaultProps = {
    review: {},
    maestro: {},
};

Review.propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.any,
    review: PropTypes.object,
    maestro: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.object,
};

export default withTheme(Review);
