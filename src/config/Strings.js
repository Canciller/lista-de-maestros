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
};

export { LoginStrings, RegisterStrings, AuthStrings, MaestroStrings };
