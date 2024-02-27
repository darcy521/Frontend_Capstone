import React, { useEffect, useState } from "react";
import "./component.css";
import Container from "./Container";
import { useNavigate } from "react-router";

export default function BookingForm(props) {
  const [formValue, setFormValue] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    numberOfGuests: false,
    occasion: false,
  });

  // update available timeslots after selecting date
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

  // upload date to upper hook
  useEffect(() => {
    if (formValue.date) {
      props.updateTimes(formValue.date);
    }
  }, [formValue.date]);

  // navigate to confirmbooking page if reserve has been confirmed
  useEffect(() => {
    if (props.isConfirmedBooking) {
      navigate("/confirmBooking");
    }
  }, [props.isConfirmedBooking, navigate]);

  // submit form data
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const errors = validate(formValue);

    setTouched({
      date: true,
      time: true,
      numberOfGuests: true,
      occasion: true,
    });

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid");
      // Perform submission actions here, such as calling an API
      await props.submitForm(formValue);
      // Handle navigation or further actions upon successful submission
    } else {
      console.log("Form is invalid", errors);
      // Handle form errors (e.g., display error messages to the user)
    }
  };

  const validate = (values) => {
    let errors = {};

    const required = (value, fieldName) =>
      !value ? `${fieldName} is required` : "";

    // A specific range validator for the numberOfGuests field
    const range = (value, min, max) =>
      value < min || value > max ? `Number of guests must be between ${min} and ${max}` : "";

    errors.date = required(values.date, "Date");
    errors.time = required(values.time, "Time");
    errors.occasion = required(values.occasion, "Occasion");

    const guestError = range(values.numberOfGuests, 1, 10);
    if (!values.numberOfGuests) {
      errors.numberOfGuests = 'Number of guests is required';
    } else if (guestError) {
      errors.numberOfGuests = guestError;
    }

    // Removing keys with empty error messages to clean up the errors object
    Object.keys(errors).forEach(key => errors[key] === '' && delete errors[key]);

    return errors;
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
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

    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }

    setFormErrors(validate({ ...formValue, [name]: value }));
  };

  return (
    <>
      <Container borderTop={'lightgray solid 1px'} borderBottom={'lightgray solid 1px'} backgroundColor={'#495E57'}>
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
            onBlur={handleBlur}
            aria-required="true"
            aria-label="Choose a date"
          />
          {touched.date && formErrors.date && (
            <p className="error">{formErrors.date}</p>
          )}
          <label htmlFor="res-time">Choose time</label>
          {isLoading ? (
            <input
            type="text"
            placeholder="Choose date to load available timeslots..."
            disabled={true}
          />
          ) : (
            <ul className="bookingform-timeslots">
              {props.availableTimes.availableTimesByDate.map(
                (availableTime, index) => (
                  <li key={index} className="timeslot" id="res-time">
                    <button
                      className={`timeslots-button ${formValue.time === availableTime ? 'active' : ''}`}
                      type="button"
                      onClick={() => handleTimeSelection(availableTime)}
                    >
                      {availableTime}
                    </button>
                  </li>
                )
              )}
            </ul>
          )}
          {touched.time && formErrors.time && (
            <p className="error">{formErrors.time}</p>
          )}
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            name="numberOfGuests"
            placeholder="0-10"
            // min="1"
            // max="10"
            id="guests"
            value={formValue.numberOfGuests}
            onChange={handleChange}
            // aria-required="true"
            onBlur={handleBlur}
          />
          {touched.numberOfGuests && formErrors.numberOfGuests && (
            <p className="error">{formErrors.numberOfGuests}</p>
          )}
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formValue.occasion}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
          >
            <option value="">--Select an Occasion--</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {touched.occasion && formErrors.occasion && (
            <p className="error">{formErrors.occasion}</p>
          )}
          <input
            type="submit"
            value="Make Your reservation"
            className="submit-button"
            aria-label="On Click"
          />
        </form>
      </Container>
    </>
  );
}
