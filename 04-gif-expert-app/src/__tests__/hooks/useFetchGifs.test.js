import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial.', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Teen Titans') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('Debe de mostrar un arreglo de imágenes y loading en false.', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Teen Titans') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);        
    })

})
