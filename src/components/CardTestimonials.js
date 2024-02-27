import React from "react";
import './component.css';

export default function CardTestimonials(props) {
  return (
    <section className="cardTestimonials-container">
      <div className="rating-customer-area">
        <h4>{props.rating}</h4>
        <img src={props.img} alt="customer" width={100} height={100}/>
      </div>
      <h4>{props.name}</h4>
      <h5>&quot;{props.reviewText}&quot;</h5>
    </section>
  );
}
