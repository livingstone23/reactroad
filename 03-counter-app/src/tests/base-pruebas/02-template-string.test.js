import {getSaludo} from "../../base-pruebas/02-template-string.js";

// eslint-disable-next-line no-undef
describe('Prueba en 02-template-string', function () {

    // eslint-disable-next-line no-undef
    test('getSaludo debe retornar "Hola Livingstone',() => {
        const name = 'Livinstone';
        const message = getSaludo(name);

        // eslint-disable-next-line no-undef
        expect(message).toBe(`Hola ${name}`)
    });

});