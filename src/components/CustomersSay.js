import React from "react";
import "./component.css";
import Container from "./Container";

export default function CustomersSay() {
  const title = "Testimonials";
  const contents = [
    {
      rating: "5",
      name: "Darcy",
      reviewText: "Review text",
      img: 'Dish icon.svg',
    },
    {
      rating: "5",
      name: "Darcy",
      reviewText: "Review text",
      img: 'Dish icon.svg',
    },
    {
      rating: "5",
      name: "Darcy",
      reviewText: "Review text",
      img: 'Dish icon.svg',
    },
    {
      rating: "5",
      name: "Darcy",
      reviewText: "Review text",
      img: 'Dish icon.svg',
    },
  ];

  return (
    <Container>
      <section className="customerSay-container">
        <h2>{title}</h2>
        <div className="customerSay-card">
        {contents.map((content) => {
          return (
            <div>
              <h4>{content.rating}</h4>
              <img src={content.img} alt="rating" />
              <h4>{content.name}</h4>
              <h5>{content.reviewText}</h5>
            </div>
          );
        })}
        </div>
      </section>
    </Container>
  );
}
