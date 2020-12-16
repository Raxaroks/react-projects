import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas en 11-async-await.test.js', () => {
    
    test('Se debe de retornar un url de una imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    });
    

});
