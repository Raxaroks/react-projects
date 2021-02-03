import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

describe('Pruebas en el componente: SearchScreen', () => {

    test('Debe de renderizarse correctamente con sus valores por defecto.', () => {
        const componentWrapper= mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect(componentWrapper).toMatchSnapshot();
        expect( componentWrapper.find('.alert-info').text().trim() ).toBe('Search for a hero');
    });    

    test('Debe de mostrarse a Batman y el input del valor del QueryString de la búsqueda.', () => {
        const componentWrapper= mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( componentWrapper.find('input').prop('value') ).toBe('batman');
        expect(componentWrapper).toMatchSnapshot();
    });    

    test('Debe de mostrar un error si no se encuentra el héroe en la búsqueda.', () => {
        const componentWrapper= mount(
            <MemoryRouter initialEntries={ ['/search?q=batman12345'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( componentWrapper.find('.alert-danger').text().trim() ).toBe( `There is no hero with batman12345` );
        expect(componentWrapper).toMatchSnapshot();
    });    

    test('Debe de llamar al push del history.', () => {
        const historyMock = {
            push: jest.fn(),
        };

        const componentWrapper= mount(
            <MemoryRouter initialEntries={ ['/search?q=batman12345'] }>
                <Route path="/search" component={ () => <SearchScreen history={ historyMock } /> } />
            </MemoryRouter>
        );

        componentWrapper.find('input').simulate('change', {
            target: {
                name: 'searchInput',
                value: 'batman'
            }
        });

        componentWrapper.find('form').prop('onSubmit')({
            preventDefault() {  }
        });

        expect( historyMock.push ).toHaveBeenCalledWith( '?q=batman' );
    });
    
});
