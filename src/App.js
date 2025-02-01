import { useEffect } from "react";
import { SingleBlogPage, TagBlogs } from "./container";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import "./App.css";
import "aos/dist/aos.css";
import Portfolio from "./site/portfolio";
import CreateBlog from "./container/CreateBlog";
import SingleBlog from "./site/singleblog";
import CreateBlog2 from "./pages/blog/CreateBlog2";
import BlogApp from "./blog/routes";

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
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Routes>
        <Route path="/blop-post" element={<SingleBlogPage />} />
        <Route path="/blog/create-blog2" element={<CreateBlog2 />} />
        <Route path="/single-blog-post" element={<SingleBlog />} />
        <Route path="/blog/create-blog" element={<CreateBlog />} />
        <Route path="/blog/search" element={<TagBlogs />} />
      </Routes>

      {/* Blog App */}
      <BlogApp />
    </>
  )
}

export default App;
