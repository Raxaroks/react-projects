import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en el componente: LoginScreen', () => {

    const setUser = jest.fn();

    const componentWrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen/>
        </UserContext.Provider>
    );

    test('Debe de renderizarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });    

    test('Debe de ejecutar la función setUser con el argumento esperado.', () => {
        componentWrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Raxaroks'
        });
    });
    
});
