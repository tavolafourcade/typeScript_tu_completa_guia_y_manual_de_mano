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
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');

    console.log(antman);
})()