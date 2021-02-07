import Swal from 'sweetalert2';
import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailPassword = ( email, password ) => {
    return (dispatch) => {
        dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch( login(user.uid, user.displayName) );
                dispatch( finishLoading() );
            } )
            .catch( error => {
                // console.log(error);
                dispatch( finishLoading() );
                Swal.fire( 'Error', error.message, 'error' );
            } );
    }
} 

export const startRegisterWithEmailNamePassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {
                // console.log(user);
                await user.updateProfile({ displayName: name })
                dispatch( login( user.uid, user.displayName ) );
            } )
            .catch( error => {
                // console.log(error);
                Swal.fire( 'Error', error.message, 'error' );
            } );
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ( { user } ) => {

                dispatch(
                    login( user.uid, user.displayName )
                )

            })
            .catch( error => {
                console.log(error);
            } );
    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid, 
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})