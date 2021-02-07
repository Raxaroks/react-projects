import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailNamePassword } from '../../actions/auth';


const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { errorMsg } = useSelector( state => state.ui );
    
    const [ formValues, handleInputChange ] = useForm({
        name: 'Andrés Ornelas',
        email: 'devops_user@test.com',
        password: 'password123',
        password2: 'password123'
    });

    const { name, email, password, password2 } = formValues; 

    const handleRegister = (evt) => {
        evt.preventDefault();
        // console.log( name, email, password, password2 );

        if ( isFormValid() ) {
            // console.log('El formulario está vergas.');
            dispatch( startRegisterWithEmailNamePassword( email, password, name ) );
        }

    } 

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            // console.log('El nombre no está completo.');            
            dispatch( setError('El nombre no está completo.') );
            return false; 
        }

        else if ( !validator.isEmail( email ) ) {
            // console.log('El email no es válido');
            dispatch( setError('El email no es válido') );
            return false;
        }

        else if ( password !== password2 || password.length < 5 ) {
            // console.log('La contraseña no es segura o no coincide.');
            dispatch( setError('La contraseña no es segura o no coincide.') );
            return false;
        }

        dispatch( removeError() );
        return true;

    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>

                {
                    errorMsg &&
                    (
                        <div className="auth__alert-error">
                            { errorMsg }
                        </div>
                    )
                    
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    className="auth__input"
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={ password2 }
                    className="auth__input"
                    onChange={ handleInputChange }
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    // disabled={ true }
                >
                    Regístrate
                </button> 

                <Link className="link mt-1" to="/auth/login">
                    ¿Ya estás registrado? ¡Inicia sesión!
                </Link>
            </form>
        </>
    );
}

export default RegisterScreen;