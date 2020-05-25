/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';

import { withTheme } from 'components/Theme';

import { useTable } from 'react-table';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { withRouter } from 'react-router-dom';
import Routes from 'config/Routes';

import {
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

import './MaestrosTable.scss';

function MaestrosTable(props) {
    const data = React.useMemo(() => props.maestros);

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: '_id',
                show: false,
            },
            {
                Header: 'Nombre',
                accessor: 'firstname', // accessor is the "key" in the data
            },
            {
                Header: 'Apellido',
                accessor: 'lastname',
            },
            {
                //Header: <Icon icon={faGraduationCap} />,
                Header: 'Título',
                accessor: 'degree', // accessor is the "key" in the data
            },
            {
                Header: <Icon icon={faGlasses} />,
                accessor: 'scores.dominio_de_la_asignatura',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faBook} />,
                accessor: 'scores.planificacion_del_curso',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faUsers} />,
                accessor: 'scores.ambientes_de_aprendizaje',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faChess} />,
                accessor: 'scores.estrategias_metodos_y_tecnicas',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faBookReader} />,
                accessor: 'scores.motivacion',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faUserCheck} />,
                accessor: 'scores.evaluacion',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faComments} />,
                accessor: 'scores.comunicacion',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faChalkboardTeacher} />,
                accessor: 'scores.gestion_del_curso',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faLaptopCode} />,
                accessor: 'scores.tecnologias_de_la_informacion_y_comunicacion',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
            },
            {
                Header: <Icon icon={faSmileBeam} />,
                accessor: 'scores.satisfaccion_general',
                Cell: props => <span>{props.value.toFixed(1)}</span>,
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
    } = useTable({
        columns,
        data,
        initialState: {
            hiddenColumns: ['_id'],
        },
    });

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
                    let id;
                    if (row.allCells) id = row.allCells[0].value;

                    const url = `${Routes.maestro.path}/${id}`;

                    prepareRow(row);
                    return (
                        <tr
                            onClick={() => props.history.push(url)}
                            {...row.getRowProps()}
                            className="Lista-row"
                        >
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '8px 12px',
                                            fontSize: '0.9em',
                                            color: theme.foreground.normal,
                                            whiteSpace: 'nowrap',
                                            textAlign: 'center',
                                            cursor: 'pointer',
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

export default withRouter(withTheme(MaestrosTable));
