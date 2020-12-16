// Desestructuración: también conocida como asignación desestructurante.
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron-Man',
};

// const {nombre, edad, clave} = persona;
// console.log(nombre, edad, clave);

const useContext = ( {nombre, edad, clave, rango = 'Avenger'} ) => {   
    console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1212,
            lng: -12.3232
        }
    }
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios, latlng}= useContext(persona);
const {lat, lng} = latlng; // hay que desestructurar para acceder a los contenidos de los objetos que se nos retornen

console.log(nombreClave, anios);
console.log(lat, lng);