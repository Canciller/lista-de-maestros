import Home from './Home';
import Lista from './Lista';
import Login from './Login';
import Register from './Register';

import {
    faHome, // Home icon
    faStream, // Lista icon
    faHeart,
    faEye,
} from '@fortawesome/free-solid-svg-icons';
import Logo from 'components/Layout/SideNav/Logo';

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
        component: Login,
    },
    Register: {
        path: '/register',
        component: Register,
    },
};
