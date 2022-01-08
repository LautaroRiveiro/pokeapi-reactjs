import './Card.css'

export const Card = ({data}) => {
  return (
    <div className="card">
      <div className="card-body">
        {/* <div className="avatar"></div> */}
        <img className="avatar" src={data.image} alt={data.name} />
        <h2 className="card-body-title">
          {data.name} <span>#{data.order}</span>
        </h2>
        <p className="card-body-subtitle">Location</p>
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