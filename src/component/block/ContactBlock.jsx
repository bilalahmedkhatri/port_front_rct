import { Grid, Container } from "@mui/material";
import { FormView, ContactView, SectionTitle } from "../../component";


export default function ContactBlock() {

  return (
    <section id="contact">
      <Container maxWidth="lg" data-aos="fade-up">
        <SectionTitle title="Contact" />
        <Grid container spacing={1}>
          <Grid item xs sm md lg my={4}>
            <ContactView />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
