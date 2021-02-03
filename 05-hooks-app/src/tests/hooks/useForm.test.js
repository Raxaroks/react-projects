import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';



describe('Pruebas en el custom hook: useForm', () => {
    
    const initialForm = {
        name: 'Andrés',
        lastname: 'Ornelas',
        nickname: 'raxaroks420',
        email: 'elpornotaquero115@gmail.com'
    };

    test('Debe de retornar un formulario por defecto.', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        // siempre hay que desestructurar el resultado
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');       

    });

    test('Debe de cambiar el valor del formulario (name).', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        // siempre hay que desestructurar el resultado
        const [ , handleInputChange ] = result.current; // dintaxis para desestructurar un solo elemento del arreglo

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Vegeta'
                }
            });
        } ); // simulamos el cambio del nombre

        const [ values ] = result.current;
        expect(values).toEqual({ ...initialForm, name: 'Vegeta' });

    });

    test('Debe de reestablecer el valor por defecto del formulario.', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        // siempre hay que desestructurar el resultado
        const [ , handleInputChange, reset ] = result.current; // dintaxis para desestructurar un solo elemento del arreglo

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Vegeta'
                }
            });

            reset();
        } ); // simulamos el cambio del nombre

        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    });
    
    

});
