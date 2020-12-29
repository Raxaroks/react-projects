import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente: <GifGrid />', () => {

    const category = 'Nekane';
    
    test('Debe de renderizarse y mostrarse correctamente.', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const componentWrapper = shallow(<GifGrid category={category} />);
        expect(componentWrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar los ítems al cargar las imágenes.', () => {
    
        const gifs = [{
            id: 'ABC',
            url: 'https://somepage.io/anything',
            title: 'Any title'
        },{
            id: '123',
            url: 'https://somepage.io/anything',
            title: 'Any title'
        }
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const componentWrapper = shallow(<GifGrid category={category} />);

        // expect( componentWrapper ).toMatchSnapshot();
        expect( componentWrapper.find('p').exists() ).toBe(false);
        expect( componentWrapper.find('GifGridItem').length ).toBe(gifs.length);
    })
    
})
