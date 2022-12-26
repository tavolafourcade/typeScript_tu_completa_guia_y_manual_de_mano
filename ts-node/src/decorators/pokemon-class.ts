//* Decorator
function printToConsole( constructor: Function) {
  console.log(constructor)
}

@printToConsole
export class Pokemon {
  public publicApi: string = 'http://pokeapi.co'

  constructor(
    public name: string
  ){}
}