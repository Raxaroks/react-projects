import React, { useEffect, useState } from 'react';

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const { x, y } = coords;
    
    useEffect(() => {   
        const mouseMove = (evt) => {
            const c = {
                x: evt.x, 
                y: evt.y
            }; setCoords(c);
        }

        // console.log('Componente montado!');
        window.addEventListener('mousemove', mouseMove);

        return () => {
            // console.log('Componente desmontado!');
            window.removeEventListener('mousemove', mouseMove);            
        }
    }, [])

    return (
        <div>
            <h3>Eres la verga, mi perro!</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    );

}

export default Message;
