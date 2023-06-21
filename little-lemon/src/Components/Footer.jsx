import "./Footer.css"
import restaurant from "../assets/icons_assets/restaurant.jpg"
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="top-section">
        <div className="left-side">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae excepturi cumque praesentium repellendus. In fuga laborum a culpa impedit illum adipisci, nostrum nisi saepe ut eos eveniet fugit perspiciatis?
          Eos hic, numquam excepturi distinctio sapiente, illo praesentium corrupti velit similique consequuntur facilis, molestiae cum laborum recusandae nam corporis dolore harum dolor enim aliquam natus odio. Quis expedita nostrum sint.</p>
        </div>
        <div className="right-side">
          <img src={restaurant} alt="" />
        </div>
      </div>
      <div className="bottom-section">

      </div>
    </div>
  )
}

export default Footer