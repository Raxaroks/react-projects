import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {


    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen: Página de login</h1> <hr/>

            <button
                className='btn btn-primary'
                onClick={ () => setUser({
                    id: 123,
                    name: 'Raxaroks'
                }) }
            >
                Login
            </button>
        </div>
    );
}

export default LoginScreen;
