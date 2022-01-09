import React, { useEffect, useState } from 'react'

export const PokemonContext = React.createContext({})
// { Consumer, Provider }

export const PokemonContextProvider = ({children})=>{

  const [pokemones, setPokemones] = useState([])
  const [pokemonId, setPokemonId] = useState('')

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response=>response.json())
    .then(data=>{
      console.log({data})
      setPokemones(data.results)
    })
  }, [])

  return (
    <PokemonContext.Provider value={{pokemones, pokemonId, setPokemonId}}>
      {children}
    </PokemonContext.Provider>
  )
}


