// eslint-disable-next-line no-undef
import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp.js";
import heroes from "../../data/heroes.js";

// eslint-disable-next-line no-undef
describe('Prueba en 08-imp-exp',  () => {

    // eslint-disable-next-line no-undef
    test('getHeroeById debe retornar un heroe por id',() => {

        const id = 1 ;
        const hero = getHeroeById(id);

        // eslint-disable-next-line no-undef
        expect( hero ).toEqual({id:1, name:'Batman', owner:'DC'})


    });

    // eslint-disable-next-line no-undef
    test('getHeroeById debe undefines si no existe id',() => {

        const id = 100 ;
        const hero = getHeroeById(id);

        // eslint-disable-next-line no-undef
        expect( hero ).toBe(undefined)

        //Para manejar valore nulos, indefinidos o falsy
        // eslint-disable-next-line no-undef
        expect( hero ).toBeFalsy()


    });

    // eslint-disable-next-line no-undef
    test('getHeroeByOwner debe regresar heroes por DC',() => {

        const owner = 'DC' ;
        const heroes = getHeroesByOwner(owner);

        // eslint-disable-next-line no-undef
        expect( heroes.length ).toBe(3);
        // eslint-disable-next-line no-undef
        expect( heroes ).toEqual(heroes.filter( (heroes) => heroes.owner === owner));


    });

});