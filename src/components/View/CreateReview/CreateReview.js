/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withAuth from 'util/withAuth';
import { withTheme } from 'components/Theme';
import Fetch from 'components/View/Fetch';
import fetchAPI from 'util/fetchAPI';

import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Typography from 'components/Typography';
import Fab from 'components/Fab';
import Button from 'components/Button';

import Scale from './Scale';

import FetchAutocomplete from 'components/FetchAutocomplete';
import { withRouter } from 'react-router-dom';
import withToast from 'util/withToast';
import { withUser } from 'components/User';
import Routes from 'config/Routes';

import './CreateReview.scss';

class Review extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { categories, theme, onChange } = this.props;

        return (
            <React.Fragment>
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
                                                        {`${parseInt(key) + 1}`}
                                                    </Typography>
                                                    <Typography className="CreateReview-question-text">
                                                        {question.text}
                                                    </Typography>
                                                </div>
                                                <Scale
                                                    onChange={onChange}
                                                    className="CreateReview-question-scale"
                                                    max={5}
                                                    name={`${category.name} ${key}`}
                                                    required
                                                />
                                            </div>
                                        </Fragment>
                                    );
                                })}
                            </div>
                            <div
                                className="CreateReview-separator"
                                style={{
                                    borderColor: theme.foreground.normal,
                                }}
                            />
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

class CreateReview extends Component {
    state = {
        found: false,
        facultad: '',
        universidad: '',
        materia: '',
        fullName: '',
        categories: {},
        review: {},
    };

    onSubmit = event => {
        event.preventDefault();

        const { materia, maestro, review, comment } = this.state;

        const { user } = this.props;

        let currentUser = user.current();

        let username;
        if (currentUser) username = currentUser.username;

        let maestroId, materiaId;
        if (maestro) maestroId = maestro['_id'];

        if (materia) materiaId = materia['_id'];

        fetchAPI('/reviews', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                maestro: maestroId,
                materia: materiaId,
                comment,
                review,
            }),
        })
            .then(review => {
                this.props.toast.success(`La reseña fue añadida exitosamente.`);

                this.props.history.goBack();
            })
            .catch(error => this.props.toast.error(error.message));
    };

    onChange = (e, data) => {
        /*
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        */
    };

    onChangeRadio = e => {
        const { review } = this.state;

        const { name, value } = e.target;
        const category = name.split(' ');

        const categoryName = category[0];
        const categoryIndex = category.length ? category[1] : undefined;

        if (categoryName && categoryIndex) {
            if (!review[categoryName]) review[categoryName] = {};
            review[categoryName][categoryIndex] = value;

            this.setState({ review });
        }
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
                            onClick={() => {
                                this.props.history.goBack();
                            }}
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
                        endpoint="/materias"
                        onChange={this.onChange}
                        onSelect={(suggestion, materia) =>
                            this.setState({ materia })
                        }
                        getSuggestion={materia => materia.name}
                        initialValue={initialValues.materia}
                        noSuggestionsMessage={
                            <Button
                                fullWidth
                                variant="blue"
                                style={{
                                    marginTop: 8,
                                }}
                                onClick={() => {
                                    this.props.history.push({
                                        pathname: Routes.createMateria.path,
                                        state: {
                                            materia: this.state.materia,
                                        },
                                    });
                                }}
                            >
                                Añadir materia
                            </Button>
                        }
                        hideClearIcon={true}
                        placeholder="Materia"
                        name="materia"
                        label="Materia"
                        required
                    />
                    <FetchAutocomplete
                        endpoint="/maestros"
                        hideClearIcon={true}
                        onChange={this.onChange}
                        onSelect={(fullName, maestro) =>
                            this.setState({ maestro })
                        }
                        getSuggestion={maestro =>
                            `${maestro.firstname} ${maestro.lastname}`
                        }
                        placeholder="Nombre y apellido del maestro"
                        name="fullName"
                        label="Nombre y apellido del maestro"
                        initialValue={initialValues.fullName}
                        required
                        noSuggestionsMessage={
                            <Button
                                fullWidth
                                variant="blue"
                                style={{
                                    marginTop: 8,
                                }}
                                onClick={() => {
                                    this.props.history.push({
                                        pathname: Routes.createMaestro.path,
                                    });
                                }}
                            >
                                Añadir maestro
                            </Button>
                        }
                        style={{
                            marginBottom: 20,
                        }}
                    />
                    {/*
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
                    />*/}
                    <Typography
                        style={{
                            fontSize: '1.2em',
                            marginBottom: 4,
                        }}
                    >
                        Comentarios
                    </Typography>
                    <textarea
                        name="comment"
                        value={this.state.comment}
                        onChange={e =>
                            this.setState({ comment: e.target.value })
                        }
                        style={{
                            resize: 'none',
                            width: '100%',
                            height: 170,
                            marginBottom: 20,
                            fontFamily: 'inherit',
                            padding: 8,
                            fontSize: '1.2em',
                            color: theme.foreground.normal,
                            background: theme.background.light,
                            border: 'none',
                            transiton: 'all 250ms',
                        }}
                        placeholder="Escribe aquí tu opinión acerca del maestro."
                        required
                    />
                    <Review
                        categories={categories}
                        theme={theme}
                        onChange={this.onChangeRadio}
                    />
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

export default withUser(
    withToast(withRouter(withAuth(withTheme(CreateReview))))
);
