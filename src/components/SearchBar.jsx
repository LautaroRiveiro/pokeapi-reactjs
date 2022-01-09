import { useEffect, useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ setFilter }) => {

  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {

      // BUSCAR ENTRE LOS POKES, DISPARAR EL EVENTO
      // OPCION 1: guardar en el context la palabra filtro
      // OPCION 2: guardar el estado en un padre comun
      setFilter(text)

    }, 600)

    return () => {
      clearTimeout(timeout)
    }
    // TODO: El linter me sugiere que agregue como dependencia la propiedad setFilter, pero es un callback, no quiero ponerlo como dependencia. Sin embargo dice que lo agregue o que borre todo el array.
  }, [text])

  return (
    <div className='searchbar'>
      <input type="text" placeholder='Buscar...' value={text} onChange={handleChange} />
    </div>
  )
}

export default SearchBar