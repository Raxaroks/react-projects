// console.log('Hola, mundo!')

const persona = {
    // declarando un objeto
    nombre: 'Peter',
    apellido: 'Parker',
    edad: 25, // algunos consideran que dejar una ',' al final del objeto, es una buena práctica
    direccion: {
        ciudad: 'New York',
        zipcode: 55123,
        lat: 14.3232,
        lng: 34.923331,
    }
};

// console.log(persona);
console.table(persona);

// console.log({persona});

const persona2 = {...persona}; // importante: esta es la forma correcta de clonar un objeto
