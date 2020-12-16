import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = { // definiendo las props y sus tipos 
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = { // definiendo props por defecto
    subtitulo: 'Soy un subtítulo.'
};

export default PrimeraApp;