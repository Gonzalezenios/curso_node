const empleados = [{
        id: 1,
        nombre: "Juana",
    },
    {
        id: 2,
        nombre: "Luis",
    },
    {
        id: 3,
        nombre: "Laura",
    },
];

const sueldos = [{
        id: 1,
        sueldo: 1500,
    },
    {
        id: 2,
        sueldo: 2000,
    },
];

const getSueldoById = async (id) => {

    try {
        const sueldo = sueldos.find((e) => e.id === id);

        if (sueldo) {
            return sueldo;
        }
        throw new Error(`El sueldo con id ${id} no existe`)
    } catch (error) {
        throw error;

    }
}

const getEmpleadoById = async (id) => {
    try {
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            return empleado;
        }
        throw new Error(`El empleado con id ${id} no existe`)
    } catch (error) {
        throw error;
    }
};

const id = 5;

const getDatosCompletosEmpleado = async (id) => {

    try {

        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        return `El empleado con id ${id} es ${empleado.nombre} y tiene un sueldo de ${sueldo.sueldo}`;

    } catch (err) {
        throw err;
    }

}

getDatosCompletosEmpleado(id)
    .then(mensaje => {console.log(mensaje)})
    .catch(err => console.log(err.message));