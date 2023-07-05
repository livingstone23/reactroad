
import { useState } from 'react';
import PropTypes from "prop-types";

export const EventoClicked = ({ value }) => {

    const [ counter, setCounter ] = useState( value )
    const handleAdd = (event) =>  {
        console.log(event);
        setCounter( counter + 1);
        //setCounter( () => 2000 )
    }

    return (
        <>
            <h1>Livingstone Cano B.</h1>
            <p>Soy un subtitulo</p>
            <p> El valor de counter es: { counter }</p>
            <p> El value es { value } </p>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

EventoClicked.propTypes = {
    value: PropTypes.number.isRequired
}