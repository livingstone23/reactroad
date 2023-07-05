// eslint-disable-next-line no-undef
import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas.js";

// eslint-disable-next-line no-undef
describe('Pruebas en 09-promesas', function () {

    // eslint-disable-next-line no-undef
    test('getHeroByIdAsync debe de retornar un heroe', ( done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                // eslint-disable-next-line no-undef
                expect(hero).toEqual({
                    id:1,
                    name:'Batman',
                    owner:'DC'
                });

            done();
        })
    });
});

// eslint-disable-next-line no-undef
describe('Pruebas en 09-promesas', function () {

    // eslint-disable-next-line no-undef
    test('getHeroByIdAsync obtener un error si no se encuentra el heroe', ( done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            
            .catch(error => {
                console.log(error);

                done();

            })
    });
});