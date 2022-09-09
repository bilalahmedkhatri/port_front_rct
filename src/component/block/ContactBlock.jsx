import { Grid, Container } from "@mui/material";
import { FormView, ContactView, SectionTitle } from "../../component";


export default function ContactBlock() {

  return (
    <section id="contact">
      <Container maxWidth="lg" data-aos="fade-up">
        {/* <section className="container" data-aos="fade-up"> */}
        <SectionTitle title="Contact" />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <ContactView />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <FormView />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
