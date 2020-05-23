import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import { Link } from 'react-router-dom';
import './MainSearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
const icon = <FontAwesomeIcon icon={faSearch} size="lg" color="#bfbfbf"/>

function MainSearch() {
    return (
        <div className="outer-div">
        
        {/*<form className="MainSearch-root" autocomplete="off">
            <input className="MainSearch-text" type="text" name="name" />
            <input className="MainSearch-button" type="submit" value="Buscar" />
    </form>*/}
        
        

       {/*<form className="MainSearch-root-b" autoComplete="off">
                <input className="MainSearch-text-b" type="text" name="name" />
                
                <button className="MainSearch-button-b" type="submit">{icon}</button>
    </form>*/}

        

        <form className="MainSearch-root-c" autoComplete="off">
                <input className="MainSearch-text-c" type="text" name="name" placeholder="Nombre del profesor"/>
                <button className="MainSearch-button-c" type="submit">{icon}</button>
        </form>

        </div>

    );
}

export default MainSearch;
