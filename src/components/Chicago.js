import React from "react";
import Container from "./Container";
import './component.css';

export default function Chicago() {
  const content = {
    title: "Little Lemon",
    location: "Chicago",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    imageA: "restaurant chef B.jpg",
    imageB: "Mario and Adrian A.jpg",
  };

  return (
    <Container backgroundColor="#495E57">
      <section className="chicago-container">
        <div className="chicago-text">
          <h2>{content.title}</h2>
          <h3>{content.location}</h3>
          <h4>{content.description}</h4>
        </div>
        <div className="chicago-img">
          <img
            src={content.imageA}
            alt="chicagoImage1"
            className="chicagoImage1"
          />
          <img
            src={content.imageB}
            alt="chicagoImage2"
            className="chicagoImage2"
          />
        </div>
      </section>
    </Container>
  );
}
