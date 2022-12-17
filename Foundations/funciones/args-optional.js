"use strict";
(() => {
    // Función con argumentos opcionales
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('John');
    console.log({ name });
})();
