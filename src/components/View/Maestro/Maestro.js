import React, { Component, Fragment } from 'react';
import Typography from 'components/Typography';
import Fetch from 'components/View/Fetch';
import PropTypes from 'prop-types';
import Review, { Score } from 'components/Review';
import { CategoryStrings } from 'config/Strings';

import './Maestro.scss';

class Reviews extends Component {
    static propTypes = {
        maestro: PropTypes.object,
    };

    static defaultProps = {
        maestro: {},
    };

    render() {
        const {
            props: { maestro },
        } = this;

        const { reviews } = maestro;

        if (!reviews)
            return <Typography>El maestro no tiene comentarios.</Typography>;

        if(reviews.length === 0)
            return <Typography>El maestro no tiene comentarios.</Typography>;

        return (
            <div>
                {reviews.map((review, index) => (
                    <Review
                        key={index}
                        review={review}
                        maestro={maestro}
                        className="Maestro-review"
                    >
                        {review.comment}
                    </Review>
                ))}
            </div>
        );
    }
}
class Maestro extends Component {
    state = {
        found: false,
        maestro: {},
    };

    render() {
        const { found, maestro } = this.state;

        const { id } = this.props.match.params;

        return (
            <Fetch
                found={found}
                endpoint={`/maestros/${id}`}
                then={maestro => this.setState({ maestro, found: true })}
            >
                <div
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Typography component="h1">
                        {[maestro.firstname, maestro.lastname].join(' ')}
                    </Typography>
                    <Typography
                        style={{
                            fontSize: '1.2em',
                        }}
                    >
                        {maestro.facultad}
                    </Typography>
                    <Typography
                        style={{
                            fontSize: '1.1em',
                        }}
                    >
                        {maestro.degree}
                    </Typography>
                </div>
                <Typography
                    component="h2"
                    style={{
                        marginBottom: 8,
                    }}
                >
                    Calificaciones
                </Typography>
                <div style={{
                    marginBottom: 8
                }}>
                    {maestro.scores &&
                        Object.keys(maestro.scores).map(key => (
                            <Score
                                key={key}
                                label={CategoryStrings[key]}
                                value={maestro.scores[key]}
                            />
                        ))}
                </div>
                <Typography
                    component="h2"
                    style={{
                        marginBottom: 8,
                    }}
                >
                    Comentarios
                </Typography>
                <Reviews maestro={maestro} />
            </Fetch>
        );
    }
}

Maestro.propTypes = {
    match: PropTypes.any.isRequired,
};

export default Maestro;
