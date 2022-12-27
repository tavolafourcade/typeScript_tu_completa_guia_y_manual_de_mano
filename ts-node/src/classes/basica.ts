(() => {
    class Avenger {
        // Propiedades
        // private nombre: string;
        // private equipo: string;
        // public nombreReal?: string;

        // Constructor
        constructor(
          private nombre: string, 
          private equipo: string, 
          public nombreReal?: string
          ) {}

        // Métodos
        bio(): string {
            let mensaje: string = `${this.nombre} ${this.equipo} ${this.nombreReal}`;
            return mensaje;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');

    console.log(antman);
    console.log(antman.bio());

})()