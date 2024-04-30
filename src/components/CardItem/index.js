import './index.css'

const CardItem = props => {
  const {cardsDetail} = props
  const {title, description, imgUrl, className} = cardsDetail

  return (
    <li className={`${className}card-item-list`}>
      <h1 className="heading">{title}</h1>
      <p className="detail">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
