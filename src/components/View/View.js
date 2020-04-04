import React, { Component } from 'react';
import classNames from 'classnames';
import './View.scss';

class View extends Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <div className={classNames('View-root', className)} {...props}>
                {children}
            </div>
        );
    }
}

View.propTypes = {};

export default View;
