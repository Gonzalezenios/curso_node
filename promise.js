
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

const getEmpleadoById = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            resolve(empleado);
            return;
        }
        reject(`El empleado con id ${id} no existe`);
    });
};

const getSueldoById = (id) => {
    return new Promise((resolve, reject) => {
        const sueldo = sueldos.find( (s) => s.id === id);

        if (sueldo) {
            resolve(sueldo);
            return;
        }
        reject(`El sueldo con id ${id} no existe`);
    });
};

const id = 1;
let nombre;

getEmpleadoById(id)

    
        .then(empleado => {
            nombre = empleado.nombre;
            return getSueldoById(id);
         })

        .then( sueldo => {

            console.log(`EL empleado: ${nombre} tiene un sueldo de ${sueldo.sueldo}`);

        })

        .catch(err => console.log(err));
