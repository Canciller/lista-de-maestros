/* eslint-disable react/prop-types */
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
                theme: { colors, foreground },
                variant,
                label,
                ...props
            },
        } = this;

        const color = colors[variant] || foreground;

        return (
            <span
                style={{
                    border: '1px solid',
                    borderColor: color.dark,
                    color: color.dark,
                    display: 'flex',
                    alignItems: 'center',
                }}
                {...props}
            >
                {label && (
                    <span
                        style={{
                            padding: '4px 8px',
                        }}
                    >
                        {label}
                    </span>
                )}
                <span
                    style={{
                        padding: '4px 8px',
                        borderColor: color.dark,
                        borderLeft: '1px solid',
                    }}
                >
                    {children}
                </span>
            </span>
        );
    }
}

const Tag = withTheme(TagBase);

const getVariant = value => {
    let variant = 'green';
    if (value <= 2) variant = 'red';
    else if (value < 4) variant = 'yellow';

    return variant;
}

const Score = ({ value, children, ...props }) => {
    let variant = getVariant(value);

    return (
        <span
            style={{
                margin: 2,
                display: 'inline-block',
            }}
        >
            <Tag {...props} variant={variant}>
                {value.toFixed(1)}
            </Tag>
        </span>
    );
};

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
        
        let variant = getVariant(review.mean);

        return (
            <div
                className={classNames('Review-root', className)}
                style={{
                    background: theme.background.normal,
                    borderColor: theme.colors[variant].normal,
                    ...style,
                }}
                {...props}
            >
                <div
                    className="Review-comment"
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Typography
                        style={{
                            fontSize: '1em',
                            textAlign: 'justify',
                        }}
                    >
                        {children}
                    </Typography>
                </div>
                <div
                    className="Review-data"
                    style={{
                        marginBottom: 8,
                        fontSize: '0.85em',
                    }}
                >
                    <Typography>Materia: {review.materia.name}</Typography>
                    <Typography>
                        Maestro:{' '}
                        {[maestro.firstname, maestro.lastname].join(' ')}
                    </Typography>
                    <Typography>
                        Fecha: {new Date(review.createdAt).toLocaleDateString()}
                    </Typography>
                </div>
                <div>
                    {Object.keys(review).map(key => {
                        if (!(key in CategoryStrings)) return;
                        return (
                            <Score
                                key={key}
                                label={CategoryStrings[key]}
                                value={review[key]}
                            />
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

export { Score };
export default withTheme(Review);
