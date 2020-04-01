import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import { Link } from 'react-router-dom';
import './User.scss';

const reviewStyle = {
    width: '500px',
    //height: '300px',
    color: 'white',
    backgroundColor: '#2f3136',
    //borderRadius: '5px',
    padding: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    //borderColor: '#83ce70',
    borderColor: '#ff6b6b'
};

const nombre = {
    fontWeight: 'bold',
    marginLeft: '5px'
};

const datos = {
    color: '#a1a1a1'
};

const DatosUp = {
    display: 'flex',
    alignItems: 'center'
};

function Review() {
    return (
        <div className="Review" style={reviewStyle}>

            <div className="DatosUp" style={DatosUp}>
                <div
                    className="Header-User-avatar"
                    style={{
                        borderColor: '#ff6b6b',
                    }}
                />

                <p className="Username" style={nombre}>Gabriel Emilio</p>
            </div>
            
            <br></br>

            <p>Al principio si va, despues de la mitad del semestre no la vuelves a ver.
                La clase los dan los alumnos y les pide preguntas al final y ese va a ser el examen.
                Regaladisimo el pase con esta maestra, solo ve a revision y entregale lo poco que encargue.
            </p>
            <br></br>
            <p className="Datos" style={datos}>
                Materia: Algoritmos Computacionales
                <br></br>
                4:47 PM . Apr 01, 2020
            </p>
        </div>
    )
}

export default Review
