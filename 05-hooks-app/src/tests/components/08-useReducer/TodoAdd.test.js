import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas en el componente TodoAdd', () => {

    const handleAddTodo = jest.fn();

    const componentWrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    );

    test('Debe de renderizarse de manera correcta.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });

    test('No debe de llamar a la función handleAddTodo.', () => {
        const formSubmit = componentWrapper.find('form').prop('onSubmit');
        formSubmit( { preventDefault(){} } );

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar a la función handleAddTodo.', () => {
        const value = 'Aprender ReactJS';
        componentWrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = componentWrapper.find('form').prop('onSubmit');
        formSubmit( { preventDefault(){} } );

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect( componentWrapper.find('input').prop('value') ).toBe('');
    });

});
