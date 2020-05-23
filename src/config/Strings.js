const RegisterStrings = {
    username: {
        required: 'El nombre de usuario es requerido.',
    },
    email: {
        required: 'El email es requerido.',
    },
    password: {
        required: 'La contraseña es requerida.',
    },
    repeatPassword: {
        noMatch: 'Las contraseñas no coinciden.',
    },
};

const LoginStrings = {
    username: {
        required: 'El email o nombre de usuario es requerido.',
    },
    password: {
        required: RegisterStrings.password.required,
    },
};

const AuthStrings = {
    unauthorized: 'Tienes que estar registrado para acceder a esta página.',
};

const MaestroStrings = {
    create: {
        failure: 'Hubo un error al tratar de añadir el maestro.',
        success: 'El maestro fue añadido exitosamente.',
    },
    firstname: {
        required: 'El nombre del maestro es requerido.',
    },
    lastname: {
        required: 'El apellido del maestro es requerido.',
    },
    degree: {
        required: 'El título del maestro es requerido.',
        invalid: 'El título no es valido.',
        enum: ['Licenciatura', 'Ingeniería', 'Maestría', 'Doctorado'],
    },
    gender: {
        required: 'El género del maestro es requerido.',
        enum: ['Masculino', 'Femenino', 'Otro'],
        invalid: 'El género del maestro no es valido.',
    },
    facultad: {
        required: 'La facultad donde enseña el maestro es requerida.',
        invalid: 'No existen facultades con ese nombre.',
    },
};

const ConnectionStrings = {
    noConnection: 'No hay conexión con el servidor, inténtelo más tarde.',
};

export {
    LoginStrings,
    RegisterStrings,
    AuthStrings,
    MaestroStrings,
    ConnectionStrings,
};
