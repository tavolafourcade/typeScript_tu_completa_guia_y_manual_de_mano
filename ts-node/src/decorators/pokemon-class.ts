//* Decorator
function printToConsole( constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print){
    return printToConsole
  } else {
    return () => {}
  }
}

@printToConsoleConditional(false)
export class Pokemon {
  public publicApi: string = 'http://pokeapi.co'

  constructor(
    public name: string
  ){}
}