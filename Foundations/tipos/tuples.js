"use strict";
(() => {
    // JS no tiene tuplas, es algo de typescript
    const hero = ['Dr Strange', 100, true];
    hero[0] = 50; // Type 'number' is not assignable to type 'string'
    // Aquí podemos controlar que valores y tipo de datos tiene la 
})();
