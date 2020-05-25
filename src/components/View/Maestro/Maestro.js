import React, { Component, Fragment } from 'react';
import Typography from 'components/Typography';
import Fetch from 'components/View/Fetch';
import PropTypes from 'prop-types';
import Review from 'components/Review';

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

        if (!reviews) return '';

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
                <Typography component="h1">
                    {[maestro.firstname, maestro.lastname].join(' ')}
                </Typography>
                <Typography component="h3">{maestro.degree}</Typography>
                <Typography
                    component="h2"
                    style={{
                        marginBottom: 8,
                    }}
                >
                    Calificaciones
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
