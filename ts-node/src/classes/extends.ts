(() => {
  class Avenger {
    constructor(
      public nombre: string, 
      public nombreReal: string
      ) {
        console.log('Constructor Avenger llamado!')
      }

      private getFullname() {
        return `${this.nombre} ${this.nombreReal}`
      }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      nombreReal: string,
      public isMutant: boolean
    ){
      super(name, nombreReal)
      console.log('Constructor Xmen llamado!')
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);

  console.log(wolverine)
})()