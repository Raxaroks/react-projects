import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en el componente: TodoApp', () => {
    
    const componentWrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn( () => {} );

    test('Debe de renderizarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
    
    test('Debe de agregar un TODO.', () => {
        const componentWrapper = mount(<TodoApp/>);

        act( () => {
            componentWrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            componentWrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect( componentWrapper.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });
    
    test('Debe de eliminar un TODO.', () => {
        componentWrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        componentWrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect( componentWrapper.find('h1').text().trim() ).toBe('TodoApp (0)'); 
    });    

});
