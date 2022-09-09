import { useEffect } from "react";
import "./App.css";
import { Header, Body, Footer } from "./container";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
