(() => {
  let avenger: any = 123
  let exists
  let power
  
  avenger = 'Dr Strange'
  // console.log(avenger.charAt(0))

  avenger= 150.3454
  console.log(avenger.toFixed(2))

  //Casting: trata un número como si fuera un string
  // console.log((avenger as String).charAt(0))

  // Otra forma de castear
  console.log(<number>avenger.toFixed(2))
})()