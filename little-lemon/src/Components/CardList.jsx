import "./CardList.css"
function Card({cards}) {

  return (
    <div className="card">
      {cards.map((card, index) => (
        <div key={index} className="cardcomponent">
          <img className="card-image" src={card.image} alt="card photo" />
          <h2>{card.menu_name}</h2>
          <h3>{card.price}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Card
