import Home from 'routes/Home';
import Lista from 'routes/Lista';
import Login from 'routes/Login';
import Register from 'routes/Register';
import Testing from 'routes/Testing';
import Profile from 'routes/Profile';
import CreateReview from 'components/View/CreateReview';

import {
    faHome, // Home icon
    faStream, // Lista icon
    faSignInAlt, // Login icon
    faUserPlus, // Register icon
    faFireAlt, // Testing icon
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
    profile: {
        path: '/user',
        param: 'username',
        component: Profile,
    },
    review: {
        path: '/review',
        component: CreateReview,
    },
};
