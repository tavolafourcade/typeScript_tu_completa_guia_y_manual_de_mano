"use strict";
(() => {
    class Avenger {
        constructor(nombre, nombreReal) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            console.log('Constructor Avenger llamado!');
        }
        getFullname() {
            return `${this.nombre} ${this.nombreReal}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, nombreReal, isMutant) {
            super(name, nombreReal);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado!');
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
})();
