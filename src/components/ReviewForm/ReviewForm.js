import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import { withTheme } from 'components/Theme';
import './ReviewForm.scss';
import TextField from 'components/TextField';

class ReviewForm extends React.Component {
    state = {
        materia: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        comentarios: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            materia: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            comentarios: '',
        });
    };

    render() {
        return (
            <form>
                <br />

                <div className="materia-text">
                <input
                    autoComplete="off"
                    id="materia"
                    placeholder="Materia"
                    name="materia"
                    value={this.state.materia}
                    onChange={e => this.change(e)}
                />
                </div>

                <br />
                <br />

                <div className="separador">CLASE</div>
                <div className="separador">EXPLICACIÓN</div>
                <div className="separador">PUNTUALIDAD</div>
                <div className="separador">ACCESIBILIDAD</div>

                <div className="pregunta">
                <p>El profesor domina los contenidos que imparte.</p>

                <label className="container">
                    <input
                        className="radio-button"
                        name="p1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Sí
                </label>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    No
                </label>
                </div>

                <br />
                <br />

                <div className="pregunta">
                <p>
                    El profesor organiza el contenido del curso de manera
                    coherente.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Sí
                </label>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    No
                </label>
                </div>
                <br />
                <br />

                <div className="pregunta">
                <p>El profesor genera un ambiente de confianza.</p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Sí
                </label>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    No
                </label>
                </div>
                <br />
                <br />

                <div className="pregunta">
                <p>El profesor genera un ambiente de equidad.</p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Sí
                </label>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    No
                </label>
                </div>
                <br />
                <br />

                <div className="pregunta">
                <p>
                    El profesor genera un ambiente de respeto hacia los alumnos.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Sí
                </label>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    No
                </label>
                </div>
                <br />
                <br />

                <div className="pregunta">
                <p>
                    El profesor genera un ambiente organizado de trabajo y
                    dispone recursos para facilitar el aprendizaje.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Sí
                </label>
                <label className="container">
                    <input
                        className="radio-button"
                        name="p6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    No
                </label>
                </div>
                <br />
                <br />

                <div className="pregunta">
                <p>
                    Es claro con sus asignaciones y su manera de comunicarse con
                    los alumnos.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="r1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>1
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>2
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>3
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>4
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r1"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>5
                </label>
                </div>

                <br />
                <br />

                <div className="pregunta">
                <p>
                    Su estrategia de enseñanza es coherente y significativa para
                    los alumnos.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="r2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>1
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>2
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>3
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>4
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r2"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>5
                </label>
                </div>

                <br />
                <br />

                <div className="pregunta">
                <p>
                    Su manera de explicar la clase es tratado de manera rigurosa
                    y es fácil de comprender para los alumnos.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="r3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>1
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>2
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>3
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>4
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r3"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>5
                </label>
                </div>

                <br />
                <br />

                <div className="pregunta">
                <p>
                    Promueve el desarrollo de pensamiento de los alumnos en la
                    clase.
                </p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="r4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>1
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>2
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>3
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>4
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r4"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>5
                </label>
                </div>
                <br />
                <br />

                <div className="pregunta">
                <p>¿Recomendarías al docente?</p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="r5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Para nada
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Poco
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Probablemente
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Muy recomendado
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r5"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Ampliamente recomendado
                </label>
                </div>

                <br />
                <br />

                <div className="pregunta">
                <p>El docente suele ser puntual con sus clases.</p>
                <label className="container">
                    <input
                        className="radio-button"
                        name="r6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Para nada
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Poco
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Algunas veces
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    La mayoría de las veces
                </label>

                <label className="container">
                    <input
                        className="radio-button"
                        name="r6"
                        type="radio"
                        onChange={e => this.change(e)}
                    />
                    <span className="checkmark"></span>
                    Muy puntual / no falta
                </label>
                </div>

                <br />
                <br />

                <div className="comentarios">
                <label className="comentarios-label">
                    Comentarios / Reseña
                    <br />
                    <br />
                    <textarea
                        name="comentarios"
                        value={this.state.comentarios}
                        onChange={e => this.change(e)}
                    />
                </label>
                </div>

                <br />
                <br />

                <button className="submitbutton" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}

export default withTheme(ReviewForm);
