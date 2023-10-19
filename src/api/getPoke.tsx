import axios from 'axios'

const POKE_API_BASE_URL = "https://pokeapi.co/api/v2/pokemon"

  export async function getAllPokemons() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios.get(POKE_API_BASE_URL)
      return response.data
    } catch(err) {
      throw err
    }
  }
 