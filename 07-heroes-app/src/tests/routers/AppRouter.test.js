import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter";

describe('Pruebas en el componente: AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('Debe de mostrarse el login si el usuario no se encuentra autenticado.', () => {
        const componentWrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(componentWrapper).toMatchSnapshot();
    });    

    test('Debe de mostrar la vista de Marvel si el usuario está autenticado.', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true
            }
        };

        const componentWrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( componentWrapper.find('.navbar').exists() ).toBe( true );
    });    

});
