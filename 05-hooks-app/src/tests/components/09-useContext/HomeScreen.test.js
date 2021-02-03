import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en el componente: HomeScreen', () => {

    const user = {
        name: 'Andrés',
        mail: 'andres@enchingue.com'
    }

    const componentWrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('Debe de renderizarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
    });    

});
