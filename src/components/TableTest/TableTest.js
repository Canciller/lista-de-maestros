/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import fetchAPI from 'util/fetchAPI';

import Typography from 'components/Typography';
import { withTheme } from 'components/Theme';

import { useTable } from 'react-table';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
    faSearch,
    faGraduationCap,
    faSchool,
    faGlasses,
    faBook,
    faUsers,
    faChess,
    faBookReader,
    faUserCheck,
    faChalkboardTeacher,
    faComments,
    faLaptopCode,
    faSmileBeam,
} from '@fortawesome/free-solid-svg-icons';

import './TableTest.scss';

function TableTest(props) {
    const data = React.useMemo(() => [
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
        {
            fullName: 'Test test test test test',
            degree: 'Licenciatura',
            facultad: 'Facultad de ingenieraia mecanica t meaasldksal',
            dominio_de_la_asignatura: 5,
            planificación_del_curso: 3,
            ambientes_de_aprendizaje: 5,
            estrategias_métodos_y_tecnicas: 1,
            motivacion: 2,
            evaluacion: 5,
            comunicacion: 3,
            gestion_del_curso: 5,
            tecnologias_de_la_información_y_la_comunicacion: 2,
            satisfaccion_general: 2,
        },
    ]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre y Apellido',
                accessor: 'fullName', // accessor is the "key" in the data
            },
            {
                //Header: <Icon icon={faGraduationCap} />,
                Header: 'Titulo',
                accessor: 'degree', // accessor is the "key" in the data
            },
            {
                //Header: <Icon icon={faSchool} />,
                Header: 'Facultad',
                accessor: 'facultad',
            },
            {
                Header: <Icon icon={faGlasses} />,
                accessor: 'dominio_de_la_asignatura',
            },
            {
                Header: <Icon icon={faBook} />,
                accessor: 'planificación_del_curso',
            },
            {
                Header: <Icon icon={faUsers} />,
                accessor: 'ambientes_de_aprendizaje',
            },
            {
                Header: <Icon icon={faChess} />,
                accessor: 'estrategias_métodos_y_tecnicas',
            },
            {
                Header: <Icon icon={faBookReader} />,
                accessor: 'motivacion',
            },
            {
                Header: <Icon icon={faUserCheck} />,
                accessor: 'evaluacion',
            },
            {
                Header: <Icon icon={faComments} />,
                accessor: 'comunicacion',
            },
            {
                Header: <Icon icon={faChalkboardTeacher} />,
                accessor: 'gestion_del_curso',
            },
            {
                Header: <Icon icon={faLaptopCode} />,
                accessor: 'tecnologias_de_la_información_y_la_comunicacion',
            },
            {
                Header: <Icon icon={faSmileBeam} />,
                accessor: 'satisfaccion_general',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const { theme } = props;

    return (
        <table
            {...getTableProps()}
            style={{
                background: theme.background.light,
                borderCollapse: 'collapse',
                width: '100%',
            }}
        >
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    textAlign: 'left',
                                    color: theme.colors.green.foreground,
                                    background: theme.colors.green.light,
                                    fontWeight: 'bold',
                                    padding: '8px 12px',
                                    whiteSpace: 'nowrap',
                                    top: 0,
                                    position: 'sticky',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className='Lista-row'>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '8px 12px',
                                            fontSize: '0.9em',
                                            color: theme.foreground.normal,
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default withTheme(TableTest);
