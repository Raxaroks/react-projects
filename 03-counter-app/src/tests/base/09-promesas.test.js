import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con 09-promesas.js', () => {
    
    test('getHeroeByIdAsync Debe de retornar un héroe, de manera asíncrona', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    });
    
    test('Debe de retornar un error si el héroe de un ID determinado no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
});
