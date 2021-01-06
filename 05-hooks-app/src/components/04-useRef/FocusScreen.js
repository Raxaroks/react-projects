import React, { useRef } from 'react';
import '../03-examples/styles.css';

const FocusScreen = () => {

   const inputRef = useRef(); // hook muy útil para mantener referencia de elementos
   console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1> <hr/>

            <input
                ref={ inputRef }
                className='form-control'
                placeholder='Nombre'
            />

            <button 
                className='btn btn-outline-primary mt-3'
                onClick={ handleClick }
            >
                Focus!!!
            </button>
        </div>
    );

}

export default FocusScreen;
