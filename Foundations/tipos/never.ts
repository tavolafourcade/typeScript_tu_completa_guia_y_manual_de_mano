(() => {

  // Cuando tenemos una función con never sabemos de ante mano que al llamarla se terminará el código
  // never implica que no se debe tener un punto alcanzable al finalizar la función
  const error = (message: string):never => {
    throw new Error(message)
  }

  const error2 = (message: string):(never | number) => {
    if (false) {
      throw new Error(message)
    }
    return 1
  }

  // error('Hello World')

  error2('Bye')
})()