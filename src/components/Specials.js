import React from "react";
import Container from "./Container";
import Card from "./Card";
import { useNavigate } from "react-router";

export default function Specials() {
  const content = {
    title: "This weeks specials!",
    buttonText: "Online Menu",
  };

  const navigate = useNavigate();

  const cards = [
    {
      title: "Greek salad",
      img: "greek salad.jpg",
      price: "$ 12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      buttonText: "Order a delivery",
      buttonImg: "cart.svg",
    },
    {
      title: "Bruchetta",
      img: "./bruchetta.svg",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      buttonText: "Order a delivery",
      buttonImg: "cart.svg",
    },
    {
      title: "Lemon Dessert",
      img: "./lemon dessert.jpg",
      price: "$ 5.00",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      buttonText: "Order a delivery",
      buttonImg: "cart.svg",
    },
  ];

  return (
    <Container>
      <section className="sepcials-container">
        <div className="special-title-area">
          <h2>{content.title}</h2>
          <button onClick={() => navigate('/menu')}>{content.buttonText}</button>
        </div>
        <div className="special-cards">
          {cards.map((card) => {
            return (
              <Card
                title={card.title}
                img={card.img}
                price={card.price}
                description={card.description}
                buttonText={card.buttonText}
                buttonImg={card.buttonImg}
                key={card.title}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
}
