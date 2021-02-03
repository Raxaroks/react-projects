import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import Navbar from "../../../components/ui/Navbar";
import { types } from "../../../types/types";


describe('Pruebas en el componente: Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: 'Jahaerys115'
        }
    }; // mocking context

    const componentWrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( () => {
        jest.clearAllMocks();
    } );

    test('Debe de renderizarse correctamente', () => {
        expect( componentWrapper ).toMatchSnapshot();
        expect( componentWrapper.find('.text-info').text().trim() ).toBe( 'Jahaerys115' );
    });

    test('Debe de llamar al Logout y usar el método pertinente con history.', () => {
        componentWrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith( {
            type: types.logout
        } );

        expect( historyMock.replace ).toHaveBeenCalledWith( '/login' );
    });    
    
});
