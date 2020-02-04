import React from 'react';
//import PropTypes from 'prop-types';

import './Switch.scss';

class Switch extends React.Component {
    render() {
        const { style, onChange } = this.props;

        return (
            <div style={style}>
                <label className="switch">
                    <input type="checkbox" onChange={onChange} />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}

export default Switch;
