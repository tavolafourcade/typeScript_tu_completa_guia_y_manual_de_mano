"use strict";
(
/*

  TypeScript implícitamente genera el tipado del objeto:
    let flash: {
    name: string;
    age: number;
    powers: string[];
    }
*/
() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
})();
