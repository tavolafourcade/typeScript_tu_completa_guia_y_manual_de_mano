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
        // Métodos
        bio() {
            let mensaje = `${this.nombre} ${this.equipo} ${this.nombreReal}`;
            return mensaje;
        }
    }
    const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
})();
