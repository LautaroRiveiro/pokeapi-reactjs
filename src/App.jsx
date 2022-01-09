import { useContext, useEffect, useState } from "react"
import { Card, Search } from "./components"
import { PokemonContext } from "./Context"

function App() {

  const [pokemon, setPokemon] = useState({})
  const { pokemonId, setPokemonId } = useContext(PokemonContext)

  useEffect(() => {
    getPokemon(pokemonId)
  }, [pokemonId])

  // TODO: Está bien que haya una fetch fuera del useEffect? (en este caso en el onClick del boton Reintentar). Una opcion sería tener un state para el número aleatorio y que al actualizarse se dispare el useEffect, pero quería ahorrar un state.
  const getPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(data => {
        const info = {
          name: data.name,
          order: data.order,
          weight: data.weight,
          height: data.height,
          hp: data.stats[0].base_stat,
          types: data.types.map(type => type.type.name),
          image: data.sprites.other['official-artwork'].front_default
        }
        console.log({ info })
        setPokemon(info)
      })
  }

  const handleRandom = ()=>{
    const order = Math.floor(Math.random() * (150 - 1 + 1) + 1)
    setPokemonId(order)
  }

  return (
    <div className="App">
      <h1 className="title">PokeAPI</h1>
      <main>
        <section className="search">
          <Search />
        </section>
        <section className="display">
          {Object.keys(pokemon).length > 0 && (
            <>
              <Card data={pokemon} />
              <button className="btn" onClick={handleRandom}> Aleatorio </button>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
