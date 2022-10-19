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
// import sucessfulLookup from "./services/userGeolocation";
const App = () => {
  const [userLocation, setUserLocation] = useState([]);
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
    navigator.geolocation.getCurrentPosition(sucessfulLookup);
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
