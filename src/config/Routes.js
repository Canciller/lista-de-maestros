import Home from 'routes/Home';
import Lista from 'routes/Lista';
import Login from 'routes/Login';
import Register from 'routes/Register';
import Testing from 'routes/Testing';
import Profile from 'routes/Profile';
import Maestro from 'components/View/Maestro';
import CreateReview from 'components/View/CreateReview';
import CreateMaestro from 'components/View/CreateMaestro';
import CreateMateria from 'components/View/CreateMateria';
import CreateUniversidad from 'components/View/CreateUniversidad';
import CreateFacultad from 'components/View/CreateFacultad';

import {
    faHome, // Home icon
    faStream, // Lista icon
    faSignInAlt, // Login icon
    faUserPlus, // Register icon
    faFireAlt,
    faUserGraduate,
    faEdit, // Testing icon
} from '@fortawesome/free-solid-svg-icons';

export default {
    home: {
        path: '/',
        icon: faHome,
        name: 'Inicio',
        component: Home,
    },
    lista: {
        path: '/lista',
        icon: faStream,
        name: 'Lista',
        component: Lista,
    },
    profile: {
        path: '/user',
        param: 'username',
        component: Profile,
    },
    maestro: {
        path: '/maestro',
        param: 'id',
        component: Maestro,
    },
    review: {
        path: '/new/review',
        name: 'Calificar maestro',
        icon: faEdit,
        component: CreateReview,
    },
    createMaestro: {
        path: '/new/maestro',
        name: 'Añadir maestro',
        icon: faUserGraduate,
        component: CreateMaestro,
    },
    createMateria: {
        path: '/new/materia',
        component: CreateMateria,
    },
    createFacultad: {
        path: '/new/facultad',
        component: CreateFacultad,
    },
    createUniversidad: {
        path: '/new/universidad',
        component: CreateUniversidad,
    },
    login: {
        path: '/login',
        icon: faSignInAlt,
        component: Login,
        name: 'Ingresar',
        hideWithUser: true,
    },
    register: {
        path: '/register',
        icon: faUserPlus,
        component: Register,
        name: 'Registrarse',
        hideWithUser: true,
    },
    testing: {
        path: '/testing',
        icon: faFireAlt,
        component: Testing,
        name: 'Testing',
    },
};
