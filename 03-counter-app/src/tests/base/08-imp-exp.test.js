import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js', () => {
    
    test('Debe de retornar un héroe por ID', () => {
        const idDefault = 1;
        const heroe = getHeroeById(idDefault);
        
        const heroeData = heroes.find( h => h.id === idDefault );
        expect(heroe).toEqual(heroeData);
    });


    test('Debe de retornar un objeto indefinido si el heróe buscado por ID no existe', () => {
        const idDefault = 15;
        const heroe = getHeroeById(idDefault);
        
        expect(heroe).toBe(undefined);
    });


    test('Debe de retornar un arreglo con héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner );
        expect(heroes).toEqual(heroesData);
    });


    test('Debe de retornar un arreglo con héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
        
});
