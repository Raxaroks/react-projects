import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HookApp from '../HookApp'; // componente a testear

describe('Pruebas en el componente: HookApp', () => {

    test('Debe de renderizarse correctamente.', () => {
        const componentWrapper = shallow(<HookApp/>);
        expect(componentWrapper).toMatchSnapshot();
    });
        
});
