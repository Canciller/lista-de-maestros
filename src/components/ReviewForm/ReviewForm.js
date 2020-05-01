import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import { withTheme } from 'components/Theme';
import './ReviewForm.scss';

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

                <input
                    placeholder="Materia"
                    name="materia"
                    value={this.state.materia}
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <p>El profesor domina los contenidos que imparte.</p>
                <input name="p1" type="radio" onChange={e => this.change(e)} />
                <label>Sí</label>
                <br />
                <input name="p1" type="radio" onChange={e => this.change(e)} />
                <label>No</label>
                <br />
                <br />

                <p>
                    El profesor organiza el contenido del curso de manera
                    coherente.
                </p>
                <input name="p2" type="radio" onChange={e => this.change(e)} />
                <label>Sí</label>
                <br />
                <input name="p2" type="radio" onChange={e => this.change(e)} />
                <label>No</label>
                <br />
                <br />

                <p>El profesor genera un ambiente de confianza.</p>
                <input name="p3" type="radio" onChange={e => this.change(e)} />
                <label>Sí</label>
                <br />
                <input name="p3" type="radio" onChange={e => this.change(e)} />
                <label>No</label>
                <br />
                <br />

                <p>El profesor genera un ambiente de equidad.</p>
                <input name="p4" type="radio" onChange={e => this.change(e)} />
                <label>Sí</label>
                <br />
                <input name="p4" type="radio" onChange={e => this.change(e)} />
                <label>No</label>
                <br />
                <br />

                <p>
                    El profesor genera un ambiente de respeto hacia los alumnos.
                </p>
                <input name="p5" type="radio" onChange={e => this.change(e)} />
                <label>Sí</label>
                <br />
                <input name="p5" type="radio" onChange={e => this.change(e)} />
                <label>No</label>
                <br />
                <br />

                <p>
                    El profesor genera un ambiente organizado de trabajo y
                    dispone recursos para facilitar el aprendizaje
                </p>
                <input name="p6" type="radio" onChange={e => this.change(e)} />
                <label>Sí</label>
                <br />
                <input name="p6" type="radio" onChange={e => this.change(e)} />
                <label>No</label>
                <br />
                <br />

                <p>
                    Es claro con sus asignaciones y su manera de comunicarse con
                    los alumnos
                </p>
                <input name="r1" type="radio" onChange={e => this.change(e)} />
                <label>1</label>
                <input name="r1" type="radio" onChange={e => this.change(e)} />
                <label>2</label>
                <input name="r1" type="radio" onChange={e => this.change(e)} />
                <label>3</label>
                <input name="r1" type="radio" onChange={e => this.change(e)} />
                <label>4</label>
                <input name="r1" type="radio" onChange={e => this.change(e)} />
                <label>5</label>
                <br />
                <br />

                <p>
                    Su estrategia de enseñanza es coherente y significativa para
                    los alumnos
                </p>
                <input name="r2" type="radio" onChange={e => this.change(e)} />
                <label>1</label>
                <input name="r2" type="radio" onChange={e => this.change(e)} />
                <label>2</label>
                <input name="r2" type="radio" onChange={e => this.change(e)} />
                <label>3</label>
                <input name="r2" type="radio" onChange={e => this.change(e)} />
                <label>4</label>
                <input name="r2" type="radio" onChange={e => this.change(e)} />
                <label>5</label>
                <br />
                <br />

                <p>
                    Su manera de explicar la clase es tratado de manera rigurosa
                    y es fácil de comprender para los alumnos
                </p>
                <input name="r3" type="radio" onChange={e => this.change(e)} />
                <label>1</label>
                <input name="r3" type="radio" onChange={e => this.change(e)} />
                <label>2</label>
                <input name="r3" type="radio" onChange={e => this.change(e)} />
                <label>3</label>
                <input name="r3" type="radio" onChange={e => this.change(e)} />
                <label>4</label>
                <input name="r3" type="radio" onChange={e => this.change(e)} />
                <label>5</label>
                <br />
                <br />

                <p>
                    Promueve el desarrollo de pensamiento de los alumnos en la
                    clase
                </p>
                <input name="r4" type="radio" onChange={e => this.change(e)} />
                <label>1</label>
                <input name="r4" type="radio" onChange={e => this.change(e)} />
                <label>2</label>
                <input name="r4" type="radio" onChange={e => this.change(e)} />
                <label>3</label>
                <input name="r4" type="radio" onChange={e => this.change(e)} />
                <label>4</label>
                <input name="r4" type="radio" onChange={e => this.change(e)} />
                <label>5</label>
                <br />
                <br />

                <p>¿Recomendaría este docente?</p>
                <input name="r5" type="radio" onChange={e => this.change(e)} />
                <label>Para nada</label>
                <input name="r5" type="radio" onChange={e => this.change(e)} />
                <label>Poco</label>
                <input name="r5" type="radio" onChange={e => this.change(e)} />
                <label>Probablemente</label>
                <input name="r5" type="radio" onChange={e => this.change(e)} />
                <label>Muy recomendado</label>
                <input name="r5" type="radio" onChange={e => this.change(e)} />
                <label>Ampliamente recomendado</label>
                <br />
                <br />

                <p>Comentarios / Reseña</p>
                <textarea
                    name="comentarios"
                    value={this.state.comentarios}
                    onChange={e => this.change(e)}
                />

                <br />
                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}

export default withTheme(ReviewForm);
