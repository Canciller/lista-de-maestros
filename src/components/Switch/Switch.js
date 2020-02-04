import React from 'react';
import PropTypes from 'prop-types';

import './Switch.scss';

class Switch extends React.Component {
    render() {
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}

export default Switch;
