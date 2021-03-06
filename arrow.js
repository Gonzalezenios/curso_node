
//Funciones basicas
function sumar(a, b) {
    return a + b
}

//Funciones Flecha
const sumar = (a , b) => {
    return a + b
}

//Funcion flecha en una linea
const sumar = (a , b) => a + b

console.log(sumar(50,50));

//Funcion flecha pasando parametros
const saludar = (nombre) => `Hola ${nombre}`

console.log(saludar('Enio'));