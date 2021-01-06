import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues; // desestructuramos las propiedades para un mejor manejo del form

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
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

            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Tu contraseña'
                    autoComplete='off'
                    value={ password }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <button type='submit' className='btn btn-dark'>ENVIAR</button>

        </form>
    );
}

export default FormWithCustomHook;
