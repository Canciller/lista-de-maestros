import Home from './Home';
import Lista from './Lista';
import Login from './Login';
import Register from './Register';
import Testing from './Testing';
import Profile from './Profile';

import {
    faHome, // Home icon
    faStream, // Lista icon
    //faHeart,
    //faEye,
    faFireAlt,
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
        path: '/signin',
        component: Login,
    },
    register: {
        path: '/signup',
        component: Register,
    },
    testing: {
        path: '/testing',
        icon: faFireAlt,
        component: Testing,
        name: 'Testing',
        withAuth: true,
    },
    profile: {
        path: '/user/:username',
        component: Profile,
    },
};
