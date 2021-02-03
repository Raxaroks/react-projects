import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';


describe('Pruebas en el custom hook: useFetch', () => {
    
    test('Debe de retornar la información por defecto.', () => {
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        
        // console.log(result.current);
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    test('Debe de retornar la información requerida: { loading: false, error: false }', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') ); 

        await waitForNextUpdate();
        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });

    test('Debe de ser capaz de manejar un error.', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apiddd/users?page=2') ); 

        await waitForNextUpdate();
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la información.');

    });
    
    

});
