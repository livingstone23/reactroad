
import PropTypes from 'prop-types';
//export function AppM() {
//    return (<h1>Hola Mundo</h1>);
//}



export const FirstApp = ({title, subTitle, name}) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Livingstone',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo'
}
