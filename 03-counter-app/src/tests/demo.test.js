
//Primera prueba
test('Esta prueba no debe fallar', () => {

if (1 === 0) {
    throw new Error('No se pudo dividir entre 0 ');
}

})


describe('Pruebas en Component' , () => {

    test('Prueba de codigo', () => {

        //1. Inicializacion
        const message1 = 'Hola Mundo';

        //2. Estimulo
        const message2 = message1.trim()

        //3. Observar el comportamiento esperado
       expect(message1).toBe(message2);

    });

});