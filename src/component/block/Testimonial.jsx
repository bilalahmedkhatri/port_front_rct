import { Container, Grid } from "@mui/material";
import { Slider, SectionTitle } from "../../component";

export default function Testimonial() {
  return (
    // < !-- ======= Testimonials Section ======= -->
    <section id="testimonials">
      <Container fixed data-aos="fade-up">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <SectionTitle title="Testimonials" />
            <Slider />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
