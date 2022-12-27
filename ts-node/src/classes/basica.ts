(() => {
    class Avenger {
        // Propiedades
        private nombre: string;
        private equipo: string;
        public nombreReal?: string;

        // Constructor
        constructor(nombre: string, equipo: string, nombreReal?: string) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap');

    console.log(antman);
})()