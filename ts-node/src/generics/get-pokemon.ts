import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon';

// Estamos creando una función que retorna una promesa con tipo genérico number
// Se creó una interfaz para Pokemon que asegura que lo que venga se va a usar bajo dicha estructura.
//*  OJO: con el uso de <Pokemon> no estamos transformando la respuesta, lo que pasa es que ahora TS va a considerar que la petición GET será de tipo Pokemon.
//*       y si le ponemos el punto después de resp.data. nos dará las opciones de la Interfaz Pokemon
// export const getPokemon = async (pokemonId: number): Promise<number> => {
//   const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//   console.log(data.abilities[0].ability.name)
//   return 1
// }
//* En este caso especificamos que retornará una Promesa de tipo Pokemon
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  return data
}