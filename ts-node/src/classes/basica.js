"use strict";
(() => {
    class Avenger {
        // Constructor
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }
    const antman = new Avenger('Antman', 'Cap');
    console.log(antman);
})();
