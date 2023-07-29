import { getImagen } from '../../base-pruebas/11-async-await'


// eslint-disable-next-line no-undef
describe('Pruebas en 11-async-await.js', () => { 

    // eslint-disable-next-line no-undef
    test('getImagen debe retornar un error si no tenemos api key', async () => {

        const resp = await getImagen();
        console.log("respuesta de la 11");
        console.log(resp);
        

        expect (typeof resp).toBe('string');


     })


})