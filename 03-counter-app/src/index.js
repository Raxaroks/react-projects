import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp />, divRoot); // renderizando el componente raíz
// ReactDOM.render(<PrimeraApp saludo="Hola, soy Gokú" />, divRoot); // renderizando el componente raíz

