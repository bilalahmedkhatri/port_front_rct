import "./App.css";
import { Header, Body, Footer } from "./container";
// import axios from 'axios'
// import { useState, useEffect } from 'react'

function App() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //     async function getAllTestimonials(){
  //         try {
  //             const testimonials = await axios.get('http://localhost:8000/portfolio/form/')
  //             console.log(testimonials.data)
  //             setData(testimonials.data)
  //         }
  //         catch (error) {
  //             console.log(error)
  //         }
  //     }
  //     getAllTestimonials()
  // }, [])

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
