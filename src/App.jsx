import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home_sec from './Components/Home_section';
import Navbar from "./Components/Header.jsx"
import Menu from "./Components/Menu.jsx"

function Reservation() {
  return (
    <div className="flex-col text-center my-72 font-bold text-3xl">
      <h1>Page Not Found</h1> 
      <p>The requested page was not found.</p>
    </div>
  );
}
function About() {
  return (
    <div className="flex-col text-center my-72 font-bold text-3xl">
      <h1>Page Not Found</h1> 
      <p>The requested page was not found.</p>
    </div>
  );
}

function Review() {
  return (
    <div className="flex-col text-center my-72 font-bold text-3xl">
      <h1>Page Not Found</h1> 
      <p>The requested page was not found.</p>
    </div>
  );
}
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home_sec />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer_reviews" element={<Review />} />
        </Routes>
      </Router>
    </>
  );
}