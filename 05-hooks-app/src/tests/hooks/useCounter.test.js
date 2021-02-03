import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en el custom hook: useCounter', () => {
    
    test('Debe de retornar los valores por defecto.', () => {
        const { result } = renderHook( () => useCounter() );

        const defaultHookValues = result.current;
        expect(defaultHookValues.counter).toBe(10);
        expect(typeof defaultHookValues.increment).toBe('function');
        expect(typeof defaultHookValues.decrement).toBe('function');
        expect(typeof defaultHookValues.reset).toBe('function');

    });

    test('Debe de retornar el contador en 200.', () => {
        const { result } = renderHook( () => useCounter(200) );

        const defaultHookValues = result.current;
        expect(defaultHookValues.counter).toBe(200);
    });
    
    test('Debe de incrementar 1 en 1 el valor del contador.', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => { increment() } );

        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('Debe de decrementar 1 en 1 el valor del contador.', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => { decrement() } ); // simulamos la función del hook en el test suite

        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('Debe de reestablecer el valor por defecto del contador.', () => {
        const { result } = renderHook( () => useCounter(115) ); // estableciendo un valor por defecto
        const { increment, reset } = result.current;

        act( () => { increment(); reset();  } );

        const { counter } = result.current;
        expect(counter).toBe(115);
    });

});
