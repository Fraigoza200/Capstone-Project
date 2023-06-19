
const TestimonialList = ({testimonials}) => {

  return (
    <div className="list">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="test-card">
          <h2>{testimonial.name}</h2>
          <p>{testimonial.review}</p>
        </div>
      ))}
    </div>
  )
}

export default TestimonialList