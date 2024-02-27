import React from "react";
import "./component.css";
import Container from "./Container";
import { useNavigate } from "react-router";

export default function CallToAction() {
  const content = {
    title: "Little Lemon",
    location: "Chicago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "restauranfood.jpg",
    buttonText: "Reserve a Table",
  };

  let navigate = useNavigate();

  const handleClicked = () => {
    navigate('/booking');
  }

  return (
    <Container backgroundColor="#495E57">
      <section className="callToAction-container">
        <div className="callToAction-text">
          <h2>{content.title}</h2>
          <h3>{content.location}</h3>
          <h4>{content.description}</h4>
          <button onClick={handleClicked}>{content.buttonText}</button>
        </div>
        <div className="callToAction-img">
          <img src={content.image} width={360} height={431} alt="callToActionImage"/>
          {/* button will appear only when screen width smaller than 700px */}
          <button onClick={handleClicked}>{content.buttonText}</button>
        </div>
      </section>
    </Container>
  );
}
