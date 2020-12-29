import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
        // console.log('handleInputChange invoked!!!');
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
        // console.log('handleSubmit invoked!!!');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{inputValue}</p>
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
