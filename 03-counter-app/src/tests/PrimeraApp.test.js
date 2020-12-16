import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
;


describe('Pruebas en PrimeraApp.js', () => {
    
    // test('Debe de mostrarse en pantalla el siguiente mensaje: "Hola, soy Gokú"', () => {
    //     const saludo = 'Hola, soy Gokú';
    //     const {getByText} = render(<PrimeraApp saludo="Hola, soy Gokú"/>);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    // Testing con Enzyme
    test('Debe de mostrar <PrimeraApp/> correctamente.', () => {
        const saludo = 'Hola, soy Gokú';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });    


    test('Debe de mostrar el contenido del subtitulo de las props', () => {
        const saludo = 'Hola, soy Gokú';
        const subTitulo = 'Soy un subtítulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);
        expect(textoParrafo).toBe(subTitulo);
    });
    
});
