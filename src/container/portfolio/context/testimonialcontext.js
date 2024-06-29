import { useState } from "react";
import Context from "../context";

export default function TestimonialProvider({ children }) {
  const [testimonialVisibility, setTestimonialVisibility] = useState([]);
  const updateContext = (value) => {
    testimonialVisibility(value);
  };

  return (
    <Context.Provider value={{ testimonialVisibility, updateContext }}>
      {children}
    </Context.Provider>
  );
}
