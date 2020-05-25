import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mergeStyles from 'util/mergeStyles';
import './View.scss';

class View extends Component {
    render() {
        const {
            className,
            style,
            children,
            flex,
            direction,
            fluid,
            ...props
        } = this.props;

        return (
            <div
                className={classNames('View-root', className)}
                style={mergeStyles(
                    flex && { display: 'flex', flexDirection: direction },
                    !fluid && { maxWidth: 960, margin: '0 auto' },
                    style
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
}

View.defaultProps = {
    flex: false,
    direction: 'row',
};

View.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
    flex: PropTypes.bool,
    fluid: PropTypes.bool,
    direction: PropTypes.string,
};

export default View;
