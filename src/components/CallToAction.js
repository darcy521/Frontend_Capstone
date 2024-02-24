import React, { Fragment } from "react";
import "./component.css";
import Container from "./Container";

export default function CallToAction() {
  const content = {
    title: "Little Lemon",
    location: "Chicago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "restauranfood.jpg",
    buttonText: "Reserve a Table",
  };

  return (
    <Container backgroundColor="#495E57">
      <section className="callToAction-container">
        <div className="callToAction-text">
          <h2>{content.title}</h2>
          <h3>{content.location}</h3>
          <h4>{content.description}</h4>
          <button>{content.buttonText}</button>
        </div>
        <div className="callToAction-img">
          <img src={content.image} width={360} height={431} alt="callToActionImage"/>
        </div>
      </section>
    </Container>
  );
}
