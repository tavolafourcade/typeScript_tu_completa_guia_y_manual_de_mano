export const printObject = ( argument: any) => {
  console.log({argument})
}

// <T>: Se usa T para definir el tipo genérico. T implica que voy a recibir un tipo de dato que va a ser el mismo tipo de dato que el argumento.

// function genericFunction<T>(argument: T): T => Con esto decimos que el retorno es de tipo genérico también.
export function genericFunction<T>( argument: T ) {
  return argument
}

export const genericFunctionArrow = <T>( argument: T ): T => argument;
