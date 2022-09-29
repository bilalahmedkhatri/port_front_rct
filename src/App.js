import { useEffect } from "react";
import { ImageConvert } from "./container";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import "./App.css";
import "aos/dist/aos.css";
import Portfolio from "./site/portfolio";
import CreateBlog from "./container/CreateBlog";


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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Routes>
        <Route path="/image_converssion" element={<ImageConvert />} />
      </Routes>
      <Routes>
        <Route path="/blog/create-blog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
