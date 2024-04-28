import './index.css'

const cardsItemList = props => {
  const {cardsList} = props
  const {title, description, imgUrl} = cardsList

  return (
    <li className={`${className}cards-item-list`}>
      <h1 className="heading">{title}</h1>
      <p className="detail">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="image" alt="image" />
      </div>
    </li>
  )
}

export default cardsItemList
