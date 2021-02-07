import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'devops_user@test.com',
        password: 'password123'
    });

    const { email, password } = formValues;

    const handleLogin = (evt) => {
        evt.preventDefault();

        if ( isFormValid() ) {
            // console.log('El formulario es correcto.');
            dispatch( startLoginWithEmailPassword( email, password ) );    
        }
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const isFormValid = () => {
        if ( !validator.isEmail( email ) ) {
            // console.log('El email no es válido');
            dispatch( setError('El email no es válido') );
            return false;
        }

        else if ( password < 5 ) {
            // console.log('La contraseña no es segura o no coincide.');
            dispatch( setError('La contraseña no es segura o no coincide.') );
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    Login
                </button> 

                <div className="auth__social-networks">
                    <p><strong>Login con redes sociales</strong></p>
                    <div className="google-btn" onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img 
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Logo de Google"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Login con Google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">
                    Crea una nueva cuenta
                </Link>
            </form>
        </>
    );
}

export default LoginScreen;
