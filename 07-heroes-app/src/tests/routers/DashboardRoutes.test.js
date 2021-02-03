import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import DashboardRoutes from "../../routers/DashboardRoutes";

describe('Pruebas en el componente: DashboardRoutes', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Juanito Banana'
        }
    }

    test('Debe de renderizarse correctamente.', () => {
        const componentWrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(componentWrapper).toMatchSnapshot();
        expect( componentWrapper.find('.text-info').text().trim() ).toBe( 'Juanito Banana' );
    });
    
});
