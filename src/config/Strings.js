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

const CategoryStrings = {
    dominio_de_la_asignatura: 'Dominio de la asignatura',
    planificacion_del_curso: 'Planificación del curso',
    ambientes_de_aprendizaje: 'Ambientes de aprendizaje',
    estrategias_metodos_y_tecnicas: 'Estrategias, métodos y técnicas',
    motivacion: 'Motivación',
    evaluacion: 'Evaluación',
    comunicacion: 'Comunicación',
    gestion_del_curso: 'Gestión del curso',
    tecnologias_de_la_informacion_y_comunicacion:
        'Tecnologías de la información y comunicación',
    satisfaccion_general: 'Satisfacción general',
};

export {
    LoginStrings,
    RegisterStrings,
    AuthStrings,
    MaestroStrings,
    ConnectionStrings,
    CategoryStrings,
};
