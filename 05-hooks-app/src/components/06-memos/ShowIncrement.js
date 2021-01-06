import React from 'react'
import PropTypes from 'prop-types';

const ShowIncrement = React.memo(({ increment }) => {

    console.log('ShowIncrement rendered again!!!');

    return (
        <button
            className='btn btn-danger'
            onClick={ () => { increment(5) } }
        >
            Incrementar!!!
        </button>
    )
})

export default ShowIncrement;

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
};
