import React, { useState} from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../03-examples/styles.css';

const RealRefExample = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1><strong>RealRefExample</strong></h1> <hr/>

            {
                show && <MultipleCustomHooks/>
            }

            <button
                className='btn btn-primary mt-4'
                onClick={ () => { setShow(!show) }}
            >
                Show/Hide
            </button>
        </div>
    );
}

export default RealRefExample;
