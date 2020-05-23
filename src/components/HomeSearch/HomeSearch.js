import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import { Link } from 'react-router-dom';
import './HomeSearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const icon = <FontAwesomeIcon icon={faSearch} size="lg" color="#bfbfbf" />;

class HomeSearch extends React.Component {
    state = {
        query: '',
    };

    onSubmit = event => {
        event.preventDefault();
    };

    render() {
        const {
            props: { theme, ...props },
            state: { query },
            onSubmit,
        } = this;

        return (
            <form
                className="HomeSearch-root"
                autoComplete="off"
                onSubmit={onSubmit}
                {...props}
            >
                <input
                    style={{
                        background: theme.background.light,
                        color: theme.foreground.normal,
                    }}
                    className="HomeSearch-query"
                    type="text"
                    name="query"
                    placeholder="Nombre del maestro"
                    onChange={({ target }) =>
                        this.setState({ [target.name]: target.value })
                    }
                    value={this.state.query}
                />
                <button
                    className="HomeSearch-search-button"
                    style={{
                        background: theme.background.normal,
                        color: theme.foreground.normal,
                    }}
                    type="submit"
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                        color="inherit"
                    />
                </button>
            </form>
        );
    }
}

export default withTheme(HomeSearch);
