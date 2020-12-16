import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en 07-deses-arr.js', () => {
    
    test('Debe de retornar un arreglo con un string y un número', () => {
        
        const dummy = [ 'ABC', 123 ];
        
        const [letras, numeros] = retornaArreglo();
        const arr = retornaArreglo();

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
        expect(arr).toEqual(dummy);
    })
    

})
