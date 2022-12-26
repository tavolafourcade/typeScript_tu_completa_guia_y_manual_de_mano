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

const bloquearPrototipo = function( constructor: Function ){
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

function CheckValidPokemonId(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log({target, propertyKey, descriptor})
    
    const originalMethod = descriptor.value
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800){
        throw new Error('El id del pokemon debe estar entre 1 y 800')
      } else {
        return originalMethod(id)
      }
    }
    
  }
}

function readonly( isWritable: boolean = true): Function {
  return function(target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get(){
        console.log(this)
        return 'Fernando'
      },

      set(this, val){
        // console.log(this, val)
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }

    return descriptor;
  }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
  @readonly(true)
  public publicApi: string = 'http://pokeapi.co'

  constructor(
    public name: string
  ){}

  @CheckValidPokemonId() // Este factory decorator se tiene que ejecutar para regresar la otra función
  savePokemonToDB( id: number ){
    console.log(`Pokemon guardado en DB ${id}`)
  }
}