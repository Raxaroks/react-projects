import React from 'react'
import '../index.css';

const GifGridItem = ( { id, title, url  } ) => {

    return (
        <div className='card animate__animated animate__pulse'>
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    );

}

export default GifGridItem;
