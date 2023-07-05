
import PropTypes from "prop-types";

export const EventoClicked = ({ value }) => {

    function handleAdd(event) {
        console.log(event)
    }

    return (
        <>
            <h1>Livingstone Cano B.</h1>
            <p>Soy un subtitulo</p>
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