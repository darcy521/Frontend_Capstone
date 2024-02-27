import React from "react";
import BookingForm from "../components/BookingForm";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../utils/FakeAPI";

const initializeState = {
  date: "",
  availableTimesByDate: [],
};

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "INITIALIZE_TIMES":
      // Assuming fetchAPI would replace this with fetched data
      return initializeState;
    default:
      return state;
  }
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeState);
  const [isConfirmedBooking, setIsConfirmedBooking] = useState(false);

  useEffect(() => {
    if (availableTimes.date) {
      initializeTimes();
    }
  }, [availableTimes.date]);

  const updateTimes = (newTimes) => {
    dispatch({ type: "UPDATE_TIMES", field: "date", payload: newTimes });
  };

  const initializeTimes = async () => {
    const response = await fetchAPI(availableTimes.date);
    // if (response.ok) {
    console.log(response);
    // }
    dispatch({
      type: "UPDATE_TIMES",
      field: "availableTimesByDate",
      payload: response,
    });
  };

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response === true) {
      setIsConfirmedBooking(true);
    }
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        initializeState={initializeTimes}
        submitForm={submitForm}
        isConfirmedBooking={isConfirmedBooking}
      />
    </main>
  );
}
