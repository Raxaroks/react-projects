// Funciones en JS
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola, mundo!';

console.log(saludar('Gokú'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Jiren'));
console.log(saludar4());

const getUser = () => ({
    uid: 'aedf05451394q112',
    username: 'raxaroks420',
}); // manera de retornar todo en una función de flecha con un objeto implícito

console.log(getUser());

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'aqwwqd12394q3312',
//         username: nombre, 
//     }
// };

const getUsuarioActivo = (nombre) => ({
    uid: 'aqwwqd12394q3312',
    username: nombre, 
});

console.log(getUsuarioActivo('jahaerys115'));

