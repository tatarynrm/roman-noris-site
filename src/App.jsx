import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiance from "./components/experience/Experience";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { sucessfulLookup } from "./services/userGeolocation";

const App = () => {
  const [userLocation, setUserLocation] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucessfulLookup, console.log);
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Testimonials />
      <Contact userLocation={userLocation} />
      <Footer />
    </>
  );
};

export default App;
