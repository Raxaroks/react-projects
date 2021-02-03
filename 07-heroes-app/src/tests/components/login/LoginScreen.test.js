import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import LoginScreen from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe('Pruebas en el componente: LoginScreen', () => {
    
    const historyMock = {
        replace: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }

    const componentWrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ historyMock } />
        </AuthContext.Provider>
    );

    test('Debe de renderizarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });
    
    test('Debe de realizar un método dispatch y la navegación correspondiente.', () => {
        const handleClick = componentWrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Raxaroks420'
            }
        });
        expect( historyMock.replace ).toHaveBeenCalledWith( '/' );
        
        localStorage.setItem( 'lastPath', '/dc' );
        handleClick();
        expect( historyMock.replace ).toHaveBeenCalledWith( '/dc' );
    });

});
