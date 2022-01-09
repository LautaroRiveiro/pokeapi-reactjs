import { useContext } from 'react'
import { PokemonContext } from '../Context'
import PokemonItem from './PokemonItem'
import './PokemonList.css'

const PokemonList = ({ filter }) => {

  const { pokemones } = useContext(PokemonContext)
  console.log({ pokemones })

  return (
    <div className='pokemon-list'>
      {
        pokemones.filter(pokemon => pokemon.name.includes(filter)).map(pokemon => (
          <PokemonItem name={pokemon.name} url={pokemon.url} />
        ))
      }
    </div>
  )
}

export default PokemonList