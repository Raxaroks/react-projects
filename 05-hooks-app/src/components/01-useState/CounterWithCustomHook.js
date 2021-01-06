import React from 'react';
// custom hooks
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css'; // estilos

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter();

    

    return (
        <>
            <h1>Counter with Hook: { state }</h1> <hr/>
 
            <button onClick={ () => increment(10) } className='btn btn-primary'>+ 1</button> 
            <button onClick={ reset } className='btn btn-danger'>Reset</button>            
            <button onClick={ () => decrement(10) } className='btn btn-primary'>- 1</button> 
        </>
    )
}

export default CounterWithCustomHook;
