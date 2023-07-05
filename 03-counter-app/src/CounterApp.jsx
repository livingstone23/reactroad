
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

    return (
        <>
            <h1>Livingstone Cano B.</h1>
            <p>Soy un subtitulo</p>
            <p> El value es { value } </p>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}