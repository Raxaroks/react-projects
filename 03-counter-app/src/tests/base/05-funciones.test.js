import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.test.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(usuario); // comparando objetos en las puertas
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Ramiro';
        const dummy = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);
        expect(user).toEqual(dummy);

    })
    
});
