import { useContext } from 'react';
import { PokemonContext } from "../Context";
import './PokemonItem.css';

const PokemonItem = ({ name, url }) => {

  const { setPokemonId } = useContext(PokemonContext)

  const handleClick = () => {
    // TODO: Refactorizar para que desde el fetch haga el split para obtener solo el Id (no me interesa la url)
    setPokemonId(url.split('/')[6])
  }

  return (
    <div className='pokemon-item' onClick={handleClick}>
      <span>{name}</span>
    </div>
  )
}

export default PokemonItem