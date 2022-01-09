import { useEffect, useState } from 'react'
import './SearchBar.css'

const SearchBar = ()=>{

  const [text, setText] = useState('')
  const handleChange = (e)=>{
    setText(e.target.value)
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{

      // BUSCAR ENTRE LOS POKES, DISPARAR EL EVENTO
      // OPCION 1: guardar en el context la palabra filtro
      // OPCION 2: guardar el estado en un padre comun

    }, 600)

    return ()=>{
      clearTimeout(timeout)
    }
  },[text])

  return (
    <div>
      <input type="text" placeholder='Buscar...' value={text} onChange={handleChange}/>
      <button>🔍</button>
    </div>
  )
}

export default SearchBar