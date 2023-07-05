// eslint-disable-next-line no-undef
import {getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones.js";

// eslint-disable-next-line no-undef
describe('Pruebas en 05-funciones', function () {


    // eslint-disable-next-line no-undef
    test('getUser debe retornar un objeto',() => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // eslint-disable-next-line no-undef
    expect(testUser).toStrictEqual(user);

    });

    // eslint-disable-next-line no-undef
    test('getUseario debe retornar un objeto',() => {

        const name = 'Livingstone';

        const user = getUsuarioActivo(name);

        // eslint-disable-next-line no-undef
        expect( user ).toStrictEqual({
            uid:'ABC567',
            username:name
        });

    });



});