import '@testing-library/jest-dom';
import '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import RealRefExample from '../../../components/04-useRef/RealRefExample';

describe('Pruebas en el componente: RealRefExample', () => {
    
    const componentWrapper = shallow(<RealRefExample/>);

    test('Debe de renderizarse correctamente.', () => {
        expect(componentWrapper).toMatchSnapshot();
        expect( componentWrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });    

    test('Debe de mostrarse correctamente el componente <MultipleCustomHooks/>', () => {
        componentWrapper.find('button').simulate('click');
        expect( componentWrapper.find('MultipleCustomHooks').exists() ).toBe(true);        
    });  

});

