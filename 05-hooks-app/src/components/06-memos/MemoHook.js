import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';
import '../05-useLayoutEffect/layout.css';

const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3> <hr/>

            <p>{ heavyProcessMemo }</p>

            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary m-3'
                onClick={ () => { setShow(!show) } }    
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    );
}

export default MemoHook;
