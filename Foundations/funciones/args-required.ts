(() => {

  // Función con argumentos obligatorios
  const fullName = (firstName:string, lastName:string):string => {
    return `${firstName} ${lastName}`
  }

  const name = fullName('John', 'Doe')
  console.log({name})
})()