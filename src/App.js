import { useEffect } from "react";
import { SingleBlogPage, TagBlogs } from "./container";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import "./App.css";
import "aos/dist/aos.css";
import Portfolio from "./site/portfolio";
import CreateBlog from "./container/CreateBlog";
import SingleBlog from "./site/singleblog";


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
        <Route path="/blop-post" element={<SingleBlogPage />} />
      </Routes>
      <Routes>
        <Route path="/single-blog-post" element={<SingleBlog />} />
      </Routes>
      <Routes>
        <Route path="/blog/create-blog" element={<CreateBlog />} />
      </Routes>
      <Routes>
        <Route path="/blog/search" element={<TagBlogs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
