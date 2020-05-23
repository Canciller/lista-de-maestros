import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import { Link } from 'react-router-dom';
import './HomeSearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, // Home icon
    faStream, // Lista icon
    //faHeart,
    //faEye,
    faSearch,
    faFireAlt,
    faSignInAlt,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

// {<input className="MainSearch-button-b" type="submit" value="Submit" />}
const icon = <FontAwesomeIcon icon={faSearch} size="lg" color="#bfbfbf" />;

function HomeSearch() {
    return (
        <div>
            <form className="root" autoComplete="off">
                <input
                    className="text"
                    type="text"
                    name="name"
                    placeholder="Nombre del maestrx"
                />
                <button className="button" type="submit">
                    {icon}
                </button>
            </form>
        </div>
    );
}

export default HomeSearch;
