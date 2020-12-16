// Mis primeras pruebas

describe('Pruebas en el archivo demo.test.js', () => {
    test('Los strings DEBEN ser iguales', () => {
    
        // inicialización
        const mensaje = 'Hola, mundo!';

        // estímulo
        const mensaje2 = `Hola, mundo!`;

        // observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===
    });
});

