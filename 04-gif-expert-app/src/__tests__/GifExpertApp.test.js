import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    test('Debe de renderizarse correctamente.', () => {
        const componentWrapper = shallow(<GifExpertApp/>);
        expect(componentWrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar una lista de categorías.', () => {
        const ctgrs = ['Death Note', 'Naruto Shippuden', 'Excel Saga'];
        const componentWrapper = shallow(<GifExpertApp defaultCategories={ctgrs}/>);

        expect(componentWrapper).toMatchSnapshot();
        expect(componentWrapper.find('GifGrid').length).toBe(ctgrs.length);
    })
    
})
