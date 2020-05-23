import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import { withTheme } from 'components/Theme';
import './TableTest.scss';

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

function TableTest() {
    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'firstname', // accessor is the "key" in the data
            },
            {
                Header: 'Apellido',
                accessor: 'lastname', // accessor is the "key" in the data
            },
            {
                Header: <Icon icon={faGraduationCap} />,
                accessor: 'degree', // accessor is the "key" in the data
            },
            {
                Header: <Icon icon={faSchool} />,
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
                accessor: 'motivación',
            },
            {
                Header: <Icon icon={faUserCheck} />,
                accessor: 'evaluación',
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
                accessor: 'gender',
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

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
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
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
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

export default TableTest;
