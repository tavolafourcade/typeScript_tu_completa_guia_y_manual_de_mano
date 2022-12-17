(() => {

  // Función con argumentos opcionales
  const fullName = (firstName:string, lastName?:string):string => {
    return `${firstName} ${lastName || 'No lastname'}`
  }

  const name = fullName('John')
  console.log({name})
})()