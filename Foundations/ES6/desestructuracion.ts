(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
}

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1400
  }

  // const {poder, vision} = avengers
  // console.log(poder, vision.toUpperCase())
  // const printAvenger = (avengers: Avengers) => {
  //   console.log( avengers.vision)
  // }

  // Con desustructuración y REST o spread operator:
  const printAvenger = ({ironman, ...resto}: Avengers) => {
    console.log( ironman, resto)
  }

  // printAvenger(avengers)

  const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk']
  // const ironman = avengersArr[1] //

  //* Con desestructuración
  const [ capitan, ironman, ] = avengersArr

  console.log({ironman, capitan})
})()