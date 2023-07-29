import { render} from '@testing-library/react';
import { FirstApp } from '../../FirstApp'
// eslint-disable-next-line no-undef
describe('Pruebas en <FirstApp />',() => {

    // eslint-disable-next-line no-undef
    test('Debe de hacer match con el snapshot', () => { 

        const title = 'Hola soy Livingstone';
        const { container } = render( <FirstApp title={ title }/> ) 

        // eslint-disable-next-line no-undef
        expect ( container ).toMatchSnapshot(); 

     });



})