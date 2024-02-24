import React from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "../pages/BookingPage";

export default function Main() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
