import React from "react";
import "./component.css";

export default function Card(props) {
  return (
    // 40% img 60% text
    <section className="card-container">
      <img src={props.img} alt="card" />
      <div className="card-textarea">
        <div className="card-name-price">
          <h3>{props.title}</h3>
          <h4>{props.price}</h4>
        </div>
        <div className="card-description-button">
        <h5>{props.description}</h5>
        <button>
          {props.buttonText} &nbsp; <img src={props.buttonImg} alt="button" />
        </button>
        </div>
      </div>
    </section>
  );
}
