import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas en el CounterApp.js', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    } );
    
    test('Se debe de mostrar el componente <CounterApp/> correctamente.', () => {
       expect(wrapper).toMatchSnapshot();
    });


    test('Debe de mostrarse el valor por defecto establecido al renderizar: 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');       
    });    


    test('Debe de incrementar el contador al hacer click al botón correspondiente', () => {
        wrapper.find('button').at(0).simulate('click'); // simulamos el clickazo   
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');        
    });


    test('Debe de decrecer el contador al hacer click al botón correspondiente', () => {
        wrapper.find('button').at(2).simulate('click'); // simulamos el clickazo   
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');        
    });
    

    test('Debe de reiniciar el valor por defecto al hacer click al botón correspondiente', () => {
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click'); // simulamos el clickazo   
        wrapper.find('button').at(0).simulate('click'); // simulamos el clickazo   
        wrapper.find('button').at(0).simulate('click'); // simulamos el clickazo   
        wrapper.find('button').at(1).simulate('click'); // simulamos el clickazo   
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');        
    });
    
});
