(() => {

  // Función con argumentos por defecto
  // A required parameter cannot follow an optional parameter
  // En JS tengo que saber el orden de los argumentos y esto es propenso a errores.
  const fullName = (firstName:string, lastName?:string, upper:boolean= false):string => {
    if(upper){
      return `${firstName} ${lastName || 'No lastname'}`.toUpperCase()
    } else {
      return `${firstName} ${lastName || 'No lastname'}`
    }

  }

  const name = fullName('John', 'Doe', true)
  console.log({name})
})()