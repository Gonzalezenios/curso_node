const personaje = {
    nombre: 'Enio',
    apellido: 'Gonzalez',
    profesion: 'Desarrollador',
    getDescription(){
        return `${nombre} ${apellido} es ${profesion}`
    }
}

// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;

// const {nombre, apellido, profesion, edad = 31} = personaje



// const imprimirPersonaje = ({nombre, apellido, profesion, edad = 31} ) => {
//     console.log(nombre, apellido, profesion, edad);
// }

// imprimirPersonaje(personaje);

const personajes = ['Batman', 'Superman', 'Mujer Maravilla'];

// const personaje1 = personajes[0];
// const personaje2 = personajes[1];
// const personaje3 = personajes[2];

const[p1, p2, p3] = personajes

console.log(p1, p2, p3);