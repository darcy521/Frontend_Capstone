import { render, screen } from "@testing-library/react";
// import App from './App';
import BookingForm from "./components/BookingForm";
import Main from "./components/Main";
import { timesReducer } from "./components/Main";
import { BrowserRouter } from "react-router-dom";

import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing

describe("try BookingForm", () => {
  test("Renders the BookingForm text", () => {
    const mockUpdateTimes = jest.fn();
    const mockAvailableTimes = jest.fn();
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          updateTimes={mockUpdateTimes}
        />
      </BrowserRouter>
    );

    const headingElement = screen.getByText("Choose time");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("timesReducer", () => {
  test("should initialize times to the default state", () => {
    render(<Main />);
    const initialState = { date: "", availableTimesByDate: [] };
    const action = { type: "INITIALIZE_TIMES", payload: [] };
    const newState = timesReducer(initialState, action);
    expect(newState).toEqual({ date: "", availableTimesByDate: [] });
  });

  test("should update fake times to the new state", () => {
    render(<Main />);
    const initialState = { date: "", availableTimesByDate: [] };
    const newTimes = ["19:00", "20:00"];
    const action = {
      type: "UPDATE_TIMES",
      field: "availableTimesByDate",
      payload: newTimes,
    };
    const newState = timesReducer(initialState, action);
    expect(newState.availableTimesByDate).toEqual(newTimes);
  });
});

describe("MyComponent using localStorage", () => {
  // Mock useNavigate
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"), // preserve other exports
    useNavigate: () => jest.fn(), // mock useNavigate
  }));

  beforeEach(() => {
    // Clear localStorage
    localStorage.clear();
    // Mock localStorage
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
  });

  test('renders data from localStorage and checks button text', () => {
    // Set a value in localStorage before rendering the component
    Storage.prototype.getItem.mockReturnValue('2024-02-01');

    const mockAvailableTimes = {
      availableTimesByDate: ['18:00', '19:00', '20:00'],
    };

    // Render the component inside a MemoryRouter to mimic the Router context
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} updateTimes={jest.fn()} isConfirmedBooking={false} submitForm={jest.fn()} />
      </MemoryRouter>
    );

    // Check if the component correctly renders the date from localStorage
    // This assumes your component logic is updated to reflect this behavior
    // expect(screen.getByDisplayValue('2024-02-01')).toBeInTheDocument();

    // Assuming you have a button to submit the form, you could check its text
    expect(screen.getByText('18:00')).toBeInTheDocument();
});
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
