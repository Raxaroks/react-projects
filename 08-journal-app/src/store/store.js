import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({ // routeReducer
    auth: authReducer,
    ui: uiReducer
});

export const store = createStore( 
    reducers,
    composeEnhancers( applyMiddleware(thunk) )
); // creando la única fuente de la verdad de la información de la aplicación