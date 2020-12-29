import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
 

describe('Pruebas en el componente <GifGridItem />', () => {

    const title = 'Some title';
    const url = 'https://somelink.com/isnotreal';
    const componentWrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('Debe de renderizar y mostrar el componente correctamente.', () => {        
        expect(componentWrapper).toMatchSnapshot();
    })

    test('Debe de tener un párrafo con el título.', () => {
        const p = componentWrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    })

    test('Debe de tener la imagen al url y alt de los props', () => {
        const img = componentWrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })

    test('Debe de tener la clase animada: animate__pulse', () => {
        const div = componentWrapper.find('div');
        const clase = div.prop('className');

        expect( clase.includes('animate__pulse') ).toBe(true);
    })
        
})
