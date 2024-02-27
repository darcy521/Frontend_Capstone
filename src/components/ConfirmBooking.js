import React from "react";
import { useNavigate } from "react-router";
import "./component.css";

export default function ConfirmBooking() {
  const confirmText = {
    text: "Thanks you for your reservation, your booking has been confirmed!",
    buttonText: "Back to home",
    imgURL: "check_12901779.png",
    navigateURL: "/",
  };
  const navigate = useNavigate();

  const handleClicked = () => {
    navigate(confirmText.navigateURL);
  };

  return (
    <section className="confirm-container">
      <img
        src={confirmText.imgURL}
        alt="confirmed"
        width={200}
        height={200}
      />
      <h3>{confirmText.text}</h3>
      <button onClick={handleClicked} className="confirm-button">{confirmText.buttonText}</button>
    </section>
  );
}
