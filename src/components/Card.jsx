import { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'

const Card = ({ data }) => {

  // const colors = data.types ? [data.types[0], data.types[1] || data.types[0]] : ['unknown', 'unknown']
  const colors = [data.types[0], data.types[1] || data.types[0]]
  const [favourite, setFavourite] = useState(false)

  useEffect(()=>{
    setFavourite(false)
    const favs = localStorage.getItem('favs')
    if (favs && JSON.parse(favs).includes(data.order)) {
      setFavourite(true)
    }
  },[data])

  const handleFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs'))
    let newFavs
    if (favourite) {
      newFavs = favs.filter(f => f !== data.order)
    } else {
      newFavs = favs ? favs.concat(data.order) : [data.order]
    }
    localStorage.setItem('favs', JSON.stringify(newFavs))
    setFavourite(!favourite)
  }

  return (
    <div className="card">
      <span className='fav' onClick={handleFav}>{favourite ? '🧡' : '🖤'}</span>
      <div className="card-body" style={{ backgroundImage: `linear-gradient(45deg, var(--type-${colors[0]}), var(--type-${colors[1]}))` }} >
        {/* <div className="avatar"></div> */}
        <img className="avatar" src={data.image} alt={data.name} />
        <h2 className="card-body-title">
          {data.name} <span>#{data.order}</span>
        </h2>
        <p className="card-body-subtitle">{data.types[0]}{data.types[1] ? ` / ${data.types[1]}` : ''}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
          <span className="card-footer-item-data">{data.weight}g</span>
          <span className="card-footer-item-description">Peso</span>
        </div>
        <div className="card-footer-item">
          <span className="card-footer-item-data">{data.height}cm</span>
          <span className="card-footer-item-description">Altura</span>
        </div>
        <div className="card-footer-item">
          <span className="card-footer-item-data">{data.hp}</span>
          <span className="card-footer-item-description">HP</span>
        </div>
      </div>
    </div>
  )
}

export default Card