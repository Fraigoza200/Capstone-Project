import './Main.css';
import  greeksalad from "../assets/greek_salad.jpg"
import bruschetta from "../assets/bruschetta.jpg"
import lemondessert from "../assets/lemon_dessert.jpg"
function MainCard() {
  const Card = [
    {
      image: greeksalad,
      menu_name: "Greek Salad",
      price: "$12.99",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum obcaecati qui eveniet velit aliquam sunt minus error autem pariatur?",
    },
    {
      image: bruschetta,
      menu_name: "Bruschetta",
      price: "$16.99",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum obcaecati qui eveniet velit aliquam sunt minus error autem pariatur?",
    },
    {
      image: lemondessert,
      menu_name: "Lemon Dessert",
      price: "$8.50",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum obcaecati qui eveniet velit aliquam sunt minus error autem pariatur?",
    }
  ];
  return (
    <section className='main_section'>
      <div className="card">
        
      </div>

    </section>
    );
}

export default MainCard;
