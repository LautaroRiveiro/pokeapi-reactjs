import { useState } from 'react'
import { PokemonList, SearchBar } from "."
import './Search.css'

const Search = () => {

  const [filter, setFilter] = useState()

  return (
    <div className="search-container">
      <SearchBar setFilter={setFilter} />
      <PokemonList filter={filter} />
    </div>
  )
}

export default Search