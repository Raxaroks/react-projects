import '@testing-library/jest-dom'; // todos los métodos importantes de JEST
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', () => {
    test('getSaludo() debe de retornar un saludo y un nombre', () => {
        const nombre = 'Andrés';
        const saludo = getSaludo(nombre);
        // console.log(saludo);

        expect(saludo).toBe('Hola '+ nombre + '!');
    });

    test('getSaludo sin argumentos', () => {
        const nombreDefault = 'Gokú';
        const saludo = getSaludo();

        expect(saludo).toBe('Hola ' + nombreDefault + '!');
    });
});