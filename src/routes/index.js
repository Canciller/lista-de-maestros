import Home from './Home';
import Lista from './Lista';

import {
    faHome, // Home icon
    faStream, // Lista icon
    faHeart,
    faEye,
} from '@fortawesome/free-solid-svg-icons';

export default {
    home: {
        path: "/",
        icon: faHome,
        name: "Inicio",
        component: Home
    },
    lista: {
        path: "/lista",
        icon: faStream,
        name: "Lista",
        component: Lista
    }
}