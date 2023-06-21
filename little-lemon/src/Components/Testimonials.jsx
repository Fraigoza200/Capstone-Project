import { useState } from "react"
import TestimonialList from "./TestimonialList"
import "./Testimonials.css"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Michael Tree",
      review: "The best Mediterranean food that I've tried!"
    },
    {
      name: "Lenin LeMour",
      review:"Play great music. Reminds me of my grandmas cooking."
    },
    {
      name: "Jio Souvent",
      review:"I would recommend the coffee, the bruschetta, and lemon dessert!"
    },
    {
      name: "Erick Bourdou",
      review: "The layout is welcoming. I always stay for the dessert though"
    },
    {
      name: "Jack Ma",
      review:"Talk about a great experience and even better food! Definately recommend"
    },
    {
      name: "Alan Nguyen",
      review:"Cozy hospitality, food is always good"
    },
  ])
  return (
    <div className="testimonial-section">
      <TestimonialList testimonials={testimonials}/>
    </div>
  )
}

export default Testimonials