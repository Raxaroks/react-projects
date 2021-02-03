import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en el componente TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const componentWrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );
   
    test('Debe de renderizarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });  
    
    test('Debe de tener una cantidad de 2 TodoListItem.', () => {
        expect(componentWrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect( componentWrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    });
    
});
