import React from "react";
import "./component.css";
import Container from "./Container";
import CardTestimonials from "./CardTestimonials";

export default function CustomersSay() {
  const title = "Testimonials";
  const contents = [
    {
      rating: "5.0",
      name: "Jackie Chan",
      reviewText: "Little Lemon Restaurant offers a refreshing take on contemporary cuisine, blending traditional flavors with a modern twist that tantalizes the taste buds",
      img: 'jackieChan.jpg',
    },
    {
      rating: "4.8",
      name: "Steve Jobs",
      reviewText: "Little Lemon Restaurant stands out not just for its exceptional cuisine but also for the unparalleled service. The team makes you feel like royalty, attending to every detail with a smile.",
      img: 'Taylor-Swift.jpg',
    },
    {
      rating: "5.0",
      name: "Darcy Chen",
      reviewText: `Absolutely delightful! Little Lemon Restaurant has quickly become my go-to for both casual dining and special occasions`,
      img: 'Darcy.jpg',
    },
    {
      rating: "4.7",
      name: "Elon Musk",
      reviewText: "The ambiance is tranquil and inviting, making it an ideal spot for a peaceful meal away from the hustle and bustle.",
      img: 'Elon_Musk.jpg',
    },
  ];

  return (
    // <section className="customerSay-container">
    <Container>
      <section className="customerSay-container">
        <h2>{title}</h2>
        <div className="customerSay-card">
        {contents.map((content, index) => {
          return (
            <CardTestimonials key={index} rating={content.rating} img={content.img} name={content.name} reviewText={content.reviewText}/>
          );
        })}
        </div>
      </section>
    </Container>
    // </section>
  );
}
