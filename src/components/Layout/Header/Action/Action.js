import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from 'components/IconButton';

class Action extends React.Component {
    render() {
        const { className, ...props } = this.props;

        return <IconButton className={classNames(className)} {...props} />;
    }
}

Action.propTypes = {
    icon: PropTypes.any.isRequired,
    className: PropTypes.string,
};

export default Action;
