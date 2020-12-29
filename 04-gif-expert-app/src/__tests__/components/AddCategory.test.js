import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente: <AddCategory />', () => {

    const setCategories = jest.fn(); // function mock
    let componentWrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        componentWrapper = shallow(<AddCategory setCategories={ setCategories }/>);
        jest.clearAllMocks();
    } )

    test('Debe de renderizarse y mostrarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
    })

    test('Debe de cambiar el contenido del input', () => {        
        const input = componentWrapper.find('input');
        const value = 'Hola, Mundo!';

        input.simulate( 'change', {target: {value}} );
        expect( componentWrapper.find('p').text().trim() ).toBe(value);
    })

    test('No debe de postear la información del formulario', () => {
        componentWrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar a setCategories y limpiar el contenido del input', () => {
        const value = 'Un valor random juasjuas';
        componentWrapper.find('input').simulate('change', {target:{value}});
        componentWrapper.find('form').simulate('submit', {preventDefault(){}});;

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect( componentWrapper.find('input').prop('value') ).toBe('');
    })
    
})
