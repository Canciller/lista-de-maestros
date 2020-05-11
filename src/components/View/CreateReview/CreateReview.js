import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import { withTheme } from 'components/Theme';
import View from 'components/View';
import Loading from 'components/View/Loading';
import Error from 'components/View/Error';
import { Redirect } from 'react-router-dom';
import Typography from 'components/Typography';
import Fab from 'components/Fab';
import PropTypes from 'prop-types';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Scale from './Scale';
import './CreateReview.scss';

class CreateReview extends Component {
    state = {};

    componentDidMount() {
        fetchAPI('/categories')
            .then(categories => this.setState({ loaded: true, categories }))
            .catch(error => this.setState({ loaded: true, error }));
    }

    onSubmit = event => {
        event.preventDefault();
    };

    render() {
        const { loaded, categories, error } = this.state;

        if (!loaded) return <Loading />;

        if(error) return <Error error={error} />

        if (!categories) return <Redirect to="/404" />;

        const { theme } = this.props;

        return (
            <View flex className="CreateReview-root">
                <form
                    className="CreateReview-container"
                    onSubmit={this.onSubmit}
                >
                    <div className="CreateReview-actions">
                        <Fab
                            className="CreateReview-action"
                            size="3em"
                            variant="red"
                            icon={faTimes}
                        />
                        <Fab
                            className="CreateReview-action"
                            size="3.5em"
                            variant="green"
                            icon={faCheck}
                            type="submit"
                        />
                    </div>
                    {Object.keys(categories).map(key => {
                        const category = categories[key];
                        const questions = category.questions;

                        return (
                            <div
                                style={{
                                    background: theme.background.normal,
                                }}
                                className="CreateReview-category"
                                key={category.name}
                            >
                                <Typography
                                    className="CreateReview-category-title"
                                    component="h2"
                                >
                                    {category.text}
                                </Typography>
                                <div className="CreateReview-questions">
                                    {Object.keys(questions).map(key => {
                                        const question = questions[key];
                                        return (
                                            <div
                                                className="CreateReview-question"
                                                key={key}
                                            >
                                                <Typography className="CreateReview-question-text">
                                                    {`${parseInt(key) + 1}.- `}{' '}
                                                    {question.text}
                                                </Typography>
                                                <Scale
                                                    max={5}
                                                    name={`${category.name}_${key}`}
                                                    required
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </form>
            </View>
        );
    }
}

CreateReview.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme(CreateReview);
