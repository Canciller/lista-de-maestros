import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import { Link } from 'react-router-dom';
import './MainSearch.scss';

function MainSearch() {
    return (
        <form className="MainSearch-root" autocomplete="off">
            <input className="MainSearch-text" type="text" name="name" />
            <input className="MainSearch-button" type="submit" value="Buscar" />
        </form>
    );
}

export default MainSearch;
