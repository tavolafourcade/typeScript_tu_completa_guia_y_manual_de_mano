"use strict";
(() => {
    class Avenger {
        // Propiedades
        // private nombre: string;
        // private equipo: string;
        // public nombreReal?: string;
        // Constructor
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }
    const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
})();
