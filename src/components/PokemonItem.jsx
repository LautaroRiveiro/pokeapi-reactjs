import './PokemonItem.css'

const PokemonItem = ({ name, url }) => {

  const handleClick = ()=>{
    console.log({name})
  }

  return (
    <div className='pokemon-item' onClick={handleClick}>
      <span>{name}</span>
    </div>
  )
}

export default PokemonItem