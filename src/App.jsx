import { useEffect, useState } from "react"
import { Card, Search } from "./components"

function App() {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getPokemon()
  }, [])

  // TODO: Está bien que haya una fetch fuera del useEffect? (en este caso en el onClick del boton Reintentar)
  const getPokemon = () => {
    const order = Math.floor(Math.random() * (150 - 1 + 1) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${order}`)
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
              <button className="btn" onClick={getPokemon}> Reintentar </button>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
