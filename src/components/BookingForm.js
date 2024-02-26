import React, { useEffect, useState } from "react";
import "./component.css";
import Container from "./Container";
import { useNavigate } from "react-router";

export default function BookingForm(props) {
  const [formValue, setFormValue] = useState({
    date: "",
    time: "",
    numberOfGuests: 0,
    occasion: "birthday",
  });

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      props.availableTimes.availableTimesByDate &&
      props.availableTimes.availableTimesByDate.length > 0
    ) {
      setFormValue((prevState) => ({
        ...prevState,
        time: props.availableTimes.availableTimesByDate[0],
      }));
      setIsLoading(false);
    }
  }, [props.availableTimes]);

  useEffect(() => {
    props.updateTimes(formValue.date);
  }, [formValue.date]);

  useEffect(() => {
    if (props.isConfirmedBooking) {
      navigate("/confirmBooking");
    }
  }, [props.isConfirmedBooking])

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    if (
      formValue.date &&
      formValue.time &&
      formValue.numberOfGuests &&
      formValue.occasion
    ) {
      await props.submitForm(formValue);
    }
  };

  const handleTimeSelection = (availableTimesByDate) => {
    setFormValue((prevState) => ({
      ...prevState,
      time: availableTimesByDate,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Container>
          <form
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
            onSubmit={onSubmit}
            className="booking-form"
          >
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formValue.date}
              onChange={handleChange}
              aria-required="true"
              aria-label="Choose a date"
            />
            <label htmlFor="res-time">Choose time</label>
            {
              isLoading ? (
                <p>Choose date to load available timeslots...</p>
              ) : (
                <ul className="bookingform-timeslots">
                  {props.availableTimes.availableTimesByDate.map(
                    (availableTime, index) => (
                      <li key={index} className="timeslot">
                        <button
                          type="button"
                          onClick={() => handleTimeSelection(availableTime)}
                        >
                          {availableTime}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              )
              // <select
              //   id="res-time"
              //   name="time"
              //   value={formValue.time}
              //   onChange={handleChange}
              //   aria-label="Choose time"
              //   aria-required="true"
              // >
              //   {
              //     props.availableTimes.availableTimesByDate.map((availableTime) => {
              //       return (
              //         <option value={availableTime} key={availableTime}>
              //           {availableTime}
              //         </option>
              //       );
              //     }) }
              // </select>
            }
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              name="numberOfGuests"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={formValue.numberOfGuests}
              onChange={handleChange}
              aria-required="true"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formValue.occasion}
              onChange={handleChange}
              aria-required="true"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <input
              type="submit"
              value="Make Your reservation"
              className="submit-button"
            />
          </form>
      </Container>
    </>
  );
}
