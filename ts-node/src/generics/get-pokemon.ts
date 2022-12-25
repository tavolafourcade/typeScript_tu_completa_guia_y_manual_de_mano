import axios from 'axios'

// Estamos creando una función que retorna una promesa con tipo genérico number
export const getPokemon = async (pokemonId: number) => {
  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  console.log({resp})
  return 1
}

