import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en el Reducer: authReducer', () => {
    
    test('Debe de retornar el estado por defecto.', () => {
        const state = authReducer( { logged: false },  {} );
        expect(state).toEqual({ logged: false });
    });

    test('Debe de autenticar y colocar el nombre de un usuario correctamente.', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jahaerys115'
            }
        };

        const state = authReducer( { logged: false }, action );
        expect(state).toEqual({
            logged: true,
            name: 'Jahaerys115'
        });
    });
    
    test("Debe de borrar el nombre del usuario y colocar el valor de 'logged' en 'false'.", () => {
        const action = {
            type: types.logout,
        };

        const state = authReducer( { logged: true, name: 'Andrés' }, action );
        expect(state).toEqual({
            logged: false
        });
    });

});
