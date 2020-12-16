// console.log('Hola, mundo!')

const nombre = "Andrés";
const apellido = "Ornelas";

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(name) {
    return 'Hola, ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);