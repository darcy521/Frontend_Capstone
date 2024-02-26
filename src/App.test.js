import { render, screen } from "@testing-library/react";
// import App from './App';
import BookingForm from "./components/BookingForm";
import Main from "./components/Main";
import { timesReducer } from "./components/Main";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter for testing
import userEvent from "@testing-library/user-event";

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

  test("renders data from localStorage and checks button text", () => {
    // Set a value in localStorage before rendering the component
    Storage.prototype.getItem.mockReturnValue("2024-02-01");

    const mockAvailableTimes = {
      availableTimesByDate: ["18:00", "19:00", "20:00"],
    };

    // Render the component inside a MemoryRouter to mimic the Router context
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          updateTimes={jest.fn()}
          isConfirmedBooking={false}
          submitForm={jest.fn()}
        />
      </MemoryRouter>
    );

    // Check if the component correctly renders the date from localStorage
    // This assumes your component logic is updated to reflect this behavior
    // expect(screen.getByDisplayValue('2024-02-01')).toBeInTheDocument();

    // Assuming you have a button to submit the form, you could check its text
    expect(screen.getByText("18:00")).toBeInTheDocument();
  });
});

describe('BookingForm', () => {
  test('displays validation error if required fields are empty upon submission', async () => {
    const mockAvailableTimes = {
      availableTimesByDate: [],
    };
    render(<MemoryRouter>
      <BookingForm submitForm={() => {}} updateTimes={() => {}} isConfirmedBooking={false} availableTimes={mockAvailableTimes}/>
      </MemoryRouter>);

    const submitButton = screen.getByRole('button', {name: 'Make Your reservation'});
    userEvent.click(submitButton);

    expect(await screen.findByText('Date is required')).toBeInTheDocument();
    expect(await screen.findByText('Time is required')).toBeInTheDocument();
    expect(await screen.findByText('Number of guests is required')).toBeInTheDocument();
    expect(await screen.findByText('Occasion is required')).toBeInTheDocument();

  });

})

describe('BookingForm Submission', () => {
  test('calls submitForm with correct values when form is valid', async () => {
    const mockSubmitForm = jest.fn();
    const mockAvailableTimes = {
      availableTimesByDate: ["18:00", "19:00", "20:00"],
    };
    render(<MemoryRouter>
        <BookingForm submitForm={mockSubmitForm} updateTimes={() => {}} isConfirmedBooking={false} availableTimes={mockAvailableTimes}/>
      </MemoryRouter>);

    // Fill in all fields with valid data
    userEvent.type(screen.getByLabelText('Choose date'), '2023-01-01');
    userEvent.click(screen.getByText('18:00')); // Assuming '18:00' is a button for time selection
    userEvent.type(screen.getByLabelText('Number of guests'), '5');
    userEvent.selectOptions(screen.getByLabelText('Occasion'), ['Birthday']);

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));

    // Check if submitForm was called with the expected values
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2023-01-01',
      time: '18:00',
      numberOfGuests: '5', // Depending on how you handle the value, might need parseInt
      occasion: 'Birthday',
    });
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
