import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats] );
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                placeholder='Escribe...' 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
