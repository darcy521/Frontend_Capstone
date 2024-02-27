import "./App.css";
import React from "react";
import { Fragment, Suspense } from "react";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy-loaded components
const LazyNav = React.lazy(() => import("./components/Nav"));
const LazyFooter = React.lazy(() => import("./components/Footer"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const BookingPage = React.lazy(() => import("./pages/BookingPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const Menu = React.lazy(() => import("./components/Menu"));
const ConfirmBooking = React.lazy(() => import("./components/ConfirmBooking"));

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <LazyNav />
                <Outlet />
                <LazyFooter />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route path="booking" element={<Suspense fallback={<Loading />}><BookingPage /></Suspense>} />
            <Route path="aboutUs" element={<Suspense fallback={<Loading />}><AboutUsPage /></Suspense>} />
            <Route path="/menu" element={<Suspense fallback={<Loading />}><Menu /></Suspense>}></Route>
            <Route path="/confirmBooking" element={<Suspense fallback={<Loading />}><ConfirmBooking /></Suspense>}></Route>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
