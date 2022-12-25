import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
.then(res => console.log(res))
.catch(error => console.error(error))
.finally(() => console.log('Fin de getPokemon'))