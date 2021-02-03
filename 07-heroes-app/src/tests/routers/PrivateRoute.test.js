import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";


describe('Pruebas en el componente: PrivateRoute', () => {

    const props = { // mocking props
        location: {
            pathname: '/marvel'
        }
    };
    
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente, si el usuario se encuentra autenticado y guardar su información en el LocalStorage.', () => {
        const componentWrapper = mount( 
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                /> 
            </MemoryRouter>
        );

        expect( componentWrapper.find('span').exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');
    });    

    test('Debe de bloquear el componente si es que no se encuentra autenticado.', () => {
        const componentWrapper = mount( 
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ false } // no estamos loggeados
                    component={ () => <span>Listo!</span> }
                    { ...props }
                /> 
            </MemoryRouter>
        );

        expect( componentWrapper.find('span').exists() ).toBe( false );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel'); 
    });

});
