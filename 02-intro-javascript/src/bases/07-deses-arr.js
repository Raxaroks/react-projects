// Desestructuración de arreglos

const guerrerosZ = ['Gokú', 'Vegeta', 'Gohan', 'Goten', 'Trunks'];

const [, , p1] = guerrerosZ;
console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123]
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => {console.log('Hola, mundo!')}];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Gokú');
console.log(nombre);
setNombre();