

//setTimeout

// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 2000 );


// const saludar = () => {
//     console.log('Hola Mundo');
// }

// setTimeout(saludar, 2000);



//callback

const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Enio'
    }

    setTimeout(() => {callback(user)}, 1000);
}

//usando destructuracion, templateString y callback
getUsuarioById(10, ({nombre, id}) => {
    console.log(`Nombre: ${nombre.toUpperCase()} - id: ${id}`);
})