import { Container, Grid } from "@mui/material";
import { Slider, SectionTitle } from "../../component";
import { createContext, useState, useEffect } from "react";
import { getTestimonialData } from "../../axios/main";

export const Context = createContext();

export default function Testimonial() {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    console.log("test testmonials 00 ; ", typeof testimonialData);
    async function getTestimonial() {
      try {
        const testimonial = await getTestimonialData("api/testimonial/");
        setTestimonialData(testimonial.bRes);
        console.log("test testmonials 01 ; ", testimonial.bRes);
      } catch (error) {
        console.log(error);
      }
    }
    getTestimonial();
    console.log("test testmonials 02 ; ", typeof testimonialData);
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
