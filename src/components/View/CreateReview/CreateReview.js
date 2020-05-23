import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withAuth from 'util/withAuth';
import { withTheme } from 'components/Theme';
import Fetch from 'components/View/Fetch';

import {
    faTimes,
    faCheck,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import Typography from 'components/Typography';
import Fab from 'components/Fab';

import Scale from './Scale';

import './CreateReview.scss';
import FetchAutocomplete from 'components/AutocompleteDatabase';
import { withRouter } from 'react-router-dom';

class CreateReview extends Component {
    state = {
        found: false,
        facultad: '',
        universidad: '',
        materia: '',
        fullName: '',
        categories: {},
    };

    onSubmit = event => {
        event.preventDefault();
    };

    onChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    onChangeRadio = e => {
        const { categories } = this.state;

        const { name, value } = e.target;
        const category = name.split(' ');

        const categoryName = category[0];
        const categoryIndex = category.length && category[1];
    };

    render() {
        const { found, categories } = this.state;

        const { theme, location } = this.props;

        const initialValues = this.props.location.state || {};

        return (
            <Fetch
                found={found}
                endpoint="/categories"
                then={categories => this.setState({ categories, found: true })}
                className="CreateReview-root"
            >
                <Typography
                    component="h1"
                    style={{
                        marginBottom: 20,
                    }}
                >
                    Calificar a un maestro
                </Typography>
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
                    <FetchAutocomplete
                        endpoint="/maestros"
                        hideClearIcon={true}
                        onChange={this.onChange}
                        onSelect={maestro => this.setState({ maestro })}
                        getSuggestion={maestro =>
                            `${maestro.firstname} ${maestro.lastname}`
                        }
                        placeholder="Nombre y apellido del maestro"
                        name="fullName"
                        label="Nombre y apellido del maestro"
                        initialValue={initialValues.fullName}
                        required
                    />
                    <FetchAutocomplete
                        endpoint="/universidades"
                        onChange={this.onChange}
                        onSelect={universidad => this.setState({ universidad })}
                        getSuggestion={universidad => universidad.name}
                        hideClearIcon={true}
                        placeholder="Universidad"
                        name="universidad"
                        label="Universidad"
                        initialValue={initialValues.universidad}
                        required
                    />
                    <FetchAutocomplete
                        endpoint="/facultades"
                        onChange={this.onChange}
                        onSelect={facultad => this.setState({ facultad })}
                        getSuggestion={facultad => facultad.name}
                        hideClearIcon={true}
                        placeholder="Facultad"
                        name="facultad"
                        label="Facultad"
                        initialValue={initialValues.facultad}
                        required
                    />
                    <FetchAutocomplete
                        endpoint="/materias"
                        onChange={this.onChange}
                        onSelect={materia => this.setState({ materia })}
                        getSuggestion={materia => materia.name}
                        initialValue={initialValues.materia}
                        hideClearIcon={true}
                        placeholder="Materia"
                        name="materia"
                        label="Materia"
                        required
                        style={{
                            marginBottom: 20,
                        }}
                    />
                    {Object.keys(categories).map(key => {
                        const category = categories[key];
                        const questions = category.questions;

                        return (
                            <div
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
                                            <Fragment key={key}>
                                                <div className="CreateReview-question">
                                                    <div className="CreateReview-question-header">
                                                        <Typography className="CreateReview-question-number">
                                                            {`${parseInt(key) +
                                                                1}`}
                                                        </Typography>
                                                        <Typography className="CreateReview-question-text">
                                                            {question.text}
                                                        </Typography>
                                                    </div>
                                                    <Scale
                                                        onChange={
                                                            this.onChangeRadio
                                                        }
                                                        className="CreateReview-question-scale"
                                                        max={5}
                                                        name={`${category.name} ${key}`}
                                                        required
                                                    />
                                                </div>
                                                <div
                                                    className="CreateReview-separator"
                                                    style={{
                                                        borderColor:
                                                            theme.foreground
                                                                .normal,
                                                    }}
                                                />
                                            </Fragment>
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
    location: PropTypes.object.isRequired,
    match: PropTypes.any.isRequired,
};

export default withRouter(withAuth(withTheme(CreateReview)));
