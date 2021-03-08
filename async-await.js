
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

const getEmpleadoById = async (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            resolve(empleado);
            return;
        }
        reject(`El empleado con id ${id} no existe`);
    });
};

