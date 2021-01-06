import React, { useEffect, useState } from 'react';
import Message from './Message';
import './effects.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState; // desestructuramos las propiedades para un mejor manejo del form

    useEffect( () => {
        // console.log('hey, si me ven!');
    }, [] );

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState] );

    useEffect( () => {
        // console.log('email changed!');
    }, [email] );

    const handleInputChange = ({ target }) => {
        // evt.preventDefault();
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1> <hr/>

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                >
                </input>
            </div>
            <br/>
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            { (name === '123') && <Message/>}
        </>
    );
}

export default SimpleForm;
