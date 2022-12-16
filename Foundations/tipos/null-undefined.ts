(() => {
  let nada: undefined = undefined

  // strickNullChecks
  let number: number = undefined // Type 'undefined' is not assignable to type 'number'

  //: nos dice que la variable está vacía.
  // undefined: nos dice que la variable no existe para el compilador.

  console.log(nada)
})()