import React from 'react'
import BookingForm from '../components/BookingForm'

export default function BookingPage(props) {

  return (
    <BookingForm
      availableTimes={props.availableTimes}
      updateTimes={props.updateTimes}
      initializeTimes={props.initializeTimes}
      submitForm={props.submitForm}
      isConfirmedBooking={props.isConfirmedBooking}
    />
  )
}
