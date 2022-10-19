import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiance from "./components/experience/Experience";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [userLocation, setUserLocation] = useState([]);
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(console.log, console.log);
  }, []);
  // console.log(navigator.geolocation);
  // navigator.geolocation.getCurrentPosition(console.log, console.log);
  const sucessfulLookup = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?${latitude}&${longitude}&localityLanguage=en`
    )
      .then((response) => response.json())
      .then((data) => {
        const preData = [];
        preData.push(data);

        setUserLocation(preData);
      });
  };
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
