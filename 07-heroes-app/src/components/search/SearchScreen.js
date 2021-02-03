import React, { useMemo } from 'react';
import queryString from 'query-string';     
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange, ] = useForm( {
        searchInput: q
    } );

    const { searchInput } = formValues;

    const heroesFiltered = useMemo( () => getHeroesByName(q), [q] );

    const handleSearch = (evt) => {
        evt.preventDefault();
        history.push( `?q=${searchInput}` );
    }

    return (
        <div>
            <h1>Search Screen</h1> <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchInput"
                            autoComplete="off"
                            value= { searchInput }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        ( q === '' ) // si el query está vacío
                            &&
                            <div className="alert alert-info">
                                Search for a hero
                            </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0 ) // si el query tiene contenido pero no encuentra alguna coincidencia
                            &&
                            <div className="alert alert-danger">
                                There is no hero with { q }
                            </div>
                    }


                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero}
                            />
                        ) )
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchScreen;