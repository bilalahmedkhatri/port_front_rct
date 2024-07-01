import { Container, Grid } from "@mui/material";
import { Slider, SectionTitle, BackendAPIData } from "..";
import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function Testimonial() {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    async function getTestimonial() {
      const testimonial = await BackendAPIData("api-portfolio/testimonial/");
      setTestimonialData(testimonial);
    }
    getTestimonial();
  }, []);

  return (
    // < !-- ======= Testimonials Section ======= -->
    <Context.Provider value={{ testimonialData }}>
      {testimonialData.bStatus === "success" ? (
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
