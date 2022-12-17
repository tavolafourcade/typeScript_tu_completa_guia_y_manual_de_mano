"use strict";
(() => {
    // Función con argumentos obligatorios
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('John', 'Doe');
    console.log({ name });
})();
