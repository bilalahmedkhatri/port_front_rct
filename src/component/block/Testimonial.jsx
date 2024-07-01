import { Container, Grid } from "@mui/material";
import { Slider, SectionTitle, BackendAPIData } from "..";
import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function Testimonial() {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    async function getTestimonial() {
      try {
        const testimonial = await BackendAPIData("api-portfolio/testimonial/");
        setTestimonialData(testimonial);
      } catch (error) {
        console.log(error);
      }
    }
    getTestimonial();
  }, []);

  return (
    // < !-- ======= Testimonials Section ======= -->
    <Context.Provider value={{ testimonialData }}>
      {testimonialData.length > 0 ? (
        <section id="testimonials">
          <Container fixed>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <SectionTitle title="Testimonials" />
                <Slider />
              </Grid>
            </Grid>
          </Container>
        </section>
      ) : (
        ""
      )}
    </Context.Provider>
  );
}
