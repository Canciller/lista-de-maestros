import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/TextField';
import Typography from 'components/Typography';

import './Autocomplete.scss';
import { withTheme } from 'components/Theme';

class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array),
        noSuggestionsMessage: PropTypes.any,
        theme: PropTypes.object.isRequired,
        variant: PropTypes.string,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        getSuggestion: PropTypes.func,
    };

    static defaultProps = {
        suggestions: [],
        onChange() {},
        onSelect() {},
        getSuggestion: suggestion => suggestion,
    };

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: '',
            selected: false,
            giveFocus: false,
            hasError: false,
        };

        this.suggestions = React.createRef();
    }

    // Event fired when the input value is changed
    onChange = e => {
        const { suggestions, onChange, getSuggestion, onSelect } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                getSuggestion(suggestion)
                    .toLowerCase()
                    .indexOf(userInput.toLowerCase()) > -1
        );

        const hasError = filteredSuggestions.length == 0;

        let savedSuggestion;
        if (filteredSuggestions.length)
            savedSuggestion = {
                ...filteredSuggestions[0],
            };

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: hasError ? suggestions : filteredSuggestions,
            showSuggestions: true,
            hasError,
            userInput: e.currentTarget.value,
            selected: false,
            giveFocus: false,
        });

        onChange(e);
        const text = savedSuggestion ? getSuggestion(savedSuggestion) : '';
        onSelect(text, savedSuggestion);
    };

    // Event fired when the user clicks on a suggestion
    onClick = e => {
        const { onSelect, getSuggestion } = this.props;
        const { filteredSuggestions } = this.state;

        const suggestion = e.currentTarget.innerText;

        const index = filteredSuggestions.findIndex(value => {
            return getSuggestion(value) === suggestion;
        });

        let savedSuggestion;
        if (index !== -1) savedSuggestion = filteredSuggestions[index];

        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            hasError: false,
            userInput: suggestion,
            giveFocus: false,
            selected: true,
        });

        onSelect(e.currentTarget.innerText, savedSuggestion);
    };

    onClear = () => {
        const {
            props: { onSelect, suggestions },
        } = this;

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: suggestions,
            showSuggestions: true,
            selected: false,
            giveFocus: true,
            hasError: false,
            userInput: '',
        });

        onSelect('');
    };

    toggle = () => {
        const {
            state: {
                filteredSuggestions,
                showSuggestions,
                selected,
                userInput,
                hasError,
            },
            props: { suggestions },
        } = this;

        const isNewSelection = selected || userInput.length === 0;

        this.setState({
            showSuggestions: !showSuggestions,
            filteredSuggestions:
                !showSuggestions && (isNewSelection || hasError)
                    ? suggestions
                    : filteredSuggestions,
            giveFocus: !showSuggestions,
        });
    };

    onFocus = () => {
        this.setState({
            showSuggestions: true,
            giveFocus: true,
            filteredSuggestions: this.props.suggestions,
        });
    };

    onBlur = () => {
        this.setState({
            showSuggestions: false,
        });
    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const {
            state: { activeSuggestion, filteredSuggestions },
            props: { onSelect, getSuggestion },
        } = this;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            const suggestion = getSuggestion(
                filteredSuggestions[activeSuggestion]
            );

            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: suggestion,
                selected: true,
                hasError: false,
            });

            onSelect(suggestion, filteredSuggestions[activeSuggestion]);
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            onClear,
            onFocus,
            onBlur,
            toggle,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput,
                hasError,
                giveFocus,
            },
            props: {
                noSuggestionsMessage,
                getSuggestion,
                suggestions,
                theme,
                variant,
                onSelect,
                ...props
            },
        } = this;

        let color = theme.colors[variant] || theme.foreground;

        let suggestionsListComponent;

        if (showSuggestions /*&& userInput*/) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul
                        className="Autocomplete-suggestions"
                        style={{
                            backgroundColor: theme.background.normal,
                            borderColor: color.normal,
                        }}
                    >
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            const active = index === activeSuggestion;
                            if (active)
                                className = 'Autocomplete-suggestion-active';

                            const value = getSuggestion(suggestion);

                            return (
                                <li
                                    className={className}
                                    key={value}
                                    onClick={onClick}
                                    style={{
                                        color: color.normal,
                                    }}
                                >
                                    {value}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        }

        return (
            <div className="Autocomplete-root">
                <TextField
                    {...props}
                    open={showSuggestions}
                    error={hasError || props.error}
                    errorMessage={
                        hasError ? noSuggestionsMessage : props.errorMessage
                    }
                    onClear={onClear}
                    onOpen={toggle}
                    onFocus={onFocus}
                    variant={variant}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    giveFocus={giveFocus}
                    autoComplete="off"
                >
                    {suggestionsListComponent}
                </TextField>
            </div>
        );
    }
}

export default withTheme(Autocomplete);
