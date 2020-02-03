import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.scss"

class ToggleSwitch extends Component {
  render() {
    return (
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    )
  }
}

export default ToggleSwitch