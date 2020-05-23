import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withAuth from 'util/withAuth';
import { withTheme } from 'components/Theme';
import Fetch from 'components/View/Fetch';

import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Typography from 'components/Typography';
import Fab from 'components/Fab';

import Scale from './Scale';

import './CreateReview.scss';

class CreateReview extends Component {
    state = {
        found: false,
        categories: {},
    };

    onSubmit = event => {
        event.preventDefault();
    };

    render() {
        const { found, categories } = this.state;

        const { theme } = this.props;

        return (
            <Fetch
                found={found}
                endpoint="/categories"
                then={categories => this.setState({ categories, found: true })}
                flex
                className="CreateReview-root"
            >
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
            </Fetch>
        );
    }
}

CreateReview.propTypes = {
    theme: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withAuth(withTheme(CreateReview));
