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
        get fullName() {
            return `${this.nombre} ${this.nombreReal}`;
        }
        set fullname(name) {
            this.nombre = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName); // Los getters no se llaman con ()
    wolverine.fullname = 'Raul'; // Los setters no se llaman con ()
    console.log(wolverine.fullName);
})();
