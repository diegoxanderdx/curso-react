describe('Pruebas en el archivo demos.test.js', () => {

    test('Esta prueba no debe de fallar', () => {
        //Inicialización
        const mensaje = 'Hola Mundo';

        //Estimulo
        const mensaje2 = `Hola Mundo`;

        //Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
})