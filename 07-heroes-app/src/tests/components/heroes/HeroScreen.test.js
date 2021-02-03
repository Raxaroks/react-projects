import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import HeroScreen from "../../../components/heroes/HeroScreen";

describe('Pruebas en el componente: HeroScreen', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    };  

    
    test('Debe de renderizarse correctamente y mostrar el componente Redirect si es que no hay argumentos en el URL.', () => {
        const componentWrapper = mount( 
            <MemoryRouter initialEntries={ ['/heroe'] }>
                <HeroScreen history={ historyMock } />
            </MemoryRouter>
        );
        // expect( componentWrapper ).toMatchSnapshot();
        expect( componentWrapper.find('Redirect').exists() ).toBe( true );
    }); 
    
    test('Debe de encontrar a un héroe si el parámetro existe.', () => {
        const componentWrapper = mount( 
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect( componentWrapper.find('.row').exists() ).toBe(true);
    });
    
    test('Debe de regresar a la pantalla anterior mediante el método push del history.', () => {
       const historyMock = {
           length: 1,
           push: jest.fn(),
           goBack: jest.fn(),
        };   

        const componentWrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Route
                    path="/hero/:heroId" 
                    component={ (props) => <HeroScreen history={ historyMock } /> } 

                />
            </MemoryRouter>
        );

        componentWrapper.find('button').prop('onClick')();

        expect( historyMock.push ).toHaveBeenCalledWith( '/' );
        expect( historyMock.goBack ).not.toHaveBeenCalled();

    });
    
    test('Debe de regresar a la pantalla anterior con goBack.', () => {
        const componenWrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
                <Route
                    path="/hero/:heroId" 
                    component={ (props) => <HeroScreen history={ historyMock } /> } 

                />
            </MemoryRouter>
        );

        componenWrapper.find('button').prop('onClick')();

        expect( historyMock.push ).toHaveBeenCalledTimes( 0 );
        expect( historyMock.goBack ).toHaveBeenCalled();

    });    

    test('Debe de llamar a Redirect si el héroe no existe.', () => {

        const componentWrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider12312312321'] }>
                <Route
                    path="/hero/:heroId" 
                    component={ (props) => <HeroScreen history={ historyMock } /> } 

                />
            </MemoryRouter>
        );

        expect( componentWrapper.text() ).toBe( '' );

    });
    

});
