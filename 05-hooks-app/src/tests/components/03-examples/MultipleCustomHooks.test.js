import '@testing-library/jest-dom';
import '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';


jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en el componente: MultipleCustomHooks', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        }); // hacemos un mock del contador antes de ejecutar cada prueba de esta test suite
    } );

    test('Debe de renderizarse correctamente.', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        }); // hacemos un mock de los valores que retorna el hook

        const componentWrapper = shallow(<MultipleCustomHooks/>);
        expect(componentWrapper).toMatchSnapshot(); // comprobamos la correcta renderización
    });

    test('Debe de mostrar la información.', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Son Gokú',
                quote: 'Me llamo Son Gokú, o también... Kakarotto.'
            }],
            loading: false,
            error: null,
        }); // hacemos un mock de los valores que retorna el hook

        const componentWrapper = shallow(<MultipleCustomHooks/>);

        expect( componentWrapper.find('.alert alert-info text-center').exists() ).toBe(false);
        expect( componentWrapper.find('.mb-3').text().trim() ).toBe('Me llamo Son Gokú, o también... Kakarotto.');
        expect( componentWrapper.find('footer').text().trim() ).toBe('Son Gokú');
    });    

});
