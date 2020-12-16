// Arreglos en JS
const arreglo = [1,2,3,4];
// const arreglo = new Array(120); -> esta manera solamente sirve cuando querramos definir un arreglo estático

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

const arreglo3 = arreglo2.map( function(numero) {
    return numero*2;
} );


console.log(arreglo, arreglo2, arreglo3);