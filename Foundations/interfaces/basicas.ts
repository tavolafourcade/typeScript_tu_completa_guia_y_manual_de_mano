(() => {
  () => {
    // type Hero = {
    //   name: string;
    //   age?: number;
    //   powers: string[];
    //   getName?: () => string;
    // }
    // Los type son propios de typeScript, no se compilan a JS

    interface Hero {
      name: string;
      age?: number;
      powers: string[];
      getName?: () => string;
    }

    let flash: Hero = {
      name: 'Barry Allen',
      age: 24,
      powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
      name: 'Barry Allen',
      age: 24,
      powers: ['Super velocidad', 'Viajar en el tiempo']
    }
  }
})()