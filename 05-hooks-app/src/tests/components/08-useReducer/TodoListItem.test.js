import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en el componente: TodoListItem', () => {

    // hacemos un mock de las funciones que se necesitan en las props
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const componentWrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    test('Debe de renderizarse de manera correcta.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });  
    
    test('Debe de llamar a la función handleDelete.', () => {
        componentWrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    }); 

    test('Debe de llamar a la función handleToggle.', () => {
        componentWrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    }); 

    test('Debe de mostrar el texto del párrafo correctamente.', () => {
        const p = componentWrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${ demoTodos[0].desc }`);
    });

    test('Debe de tener la clase complete si el TODO.done === true.', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const componentWrapper = shallow(
            <TodoListItem
                todo={demoTodos[0]}
            />
        );

        expect(componentWrapper.find('p').hasClass('complete')).toBe(true);
    });
        

});
