import { useEffect, useState } from 'react'
import './App.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PokemonCard from './components/PokemonCard'
import { getAllPokemons } from './api/getPoke';
import getPokemonId from './utils/getPokemonId';

// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';


interface PokemonCardProps {
  name: string,
  url: string
}

function App() {
  const [allPokemons, setAllPokemons] = useState<PokemonCardProps[]>([]);


  useEffect(() => {
    async function fetchPokemonData() {
      const data = await getAllPokemons();
      setAllPokemons(data.results)
      // console.log(allPokemons)
    }
    fetchPokemonData()
  }, [])


  return (
    <>
      <h1 className='pokedex'>Pokedex</h1>
      {allPokemons.length > 0 ? (
        <div className="pokemon-cards">
          {allPokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${getPokemonId(pokemon.url)}.png`} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
