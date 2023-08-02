import { Typography, Grid, Container, Link } from "@mui/material";
import { SectionTitle, AboutList } from "../../component";
import BackgroundImage from "../../media/img/profile_pic.webp";

export default function About() {
  const infoData1 = [
    { data: "Website", info: "www.azeemlab.com", option: "link" },
    { data: "WhatsApp", info: "+92 321 3009321", option: false },
    { data: "City", info: "Karachi, Pakistan", option: false },
  ]

  const infoData2 = [
    { data: "Degree", info: "Bachelor", option: false },
    { data: "Email", info: "bilalahmedkhatri@outlook.com", option: "mail"},
    { data: "Freelance", info: "Available", option: false },
  ]
  return (
    // <section id="about">
      <Container data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SectionTitle title="About Me" />
            <Typography variant="body1" gutterBottom align="justify">
              Experienced web developer with a strong background in developing
              applications for a diverse clientele. 3+ years of industry
              experience includes programming, debugging, and wireframes. Received
              60%+ experience scores on every web application for CloudsCourt.
              Received 70%+ experience scores on Web creation, configuration and
              maintenance projects built for IsfainITSolution and Lastly I
              recieved my best experience score in Intelliversal Solutions which
              had on peacked at level of 95%.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} >
            <img src={BackgroundImage} style={{ display: 'block', width: '100%' }} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
              Web Developer &amp; Python Developer.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Results-driven freelance web developer, seeking to use proven
              Python and JavaScript skills to deliver coding excellence to
              clients. Have developed some Modules with collaboration.
              Contributed to
              <Link href="https://www.codegrepper.com/profile/bilalahmeddev" rel="noreferrer" target='_blank' underline="none" variant="body1">
                <strong> CodeGrepper </strong>
              </Link>
              project to help developers community debugged apps. Wrote back-end
              code for multiple working business websites.
            </Typography>
            <Grid container spacing={1} >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {infoData1.map((d, k) => (
                  <AboutList key={k} info={d.info} data={d.data} option={d.option} name={d.name}/>
                ))}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {infoData2.map((d, k) => (
                  <AboutList key={k} info={d.info} data={d.data} option={d.option} />
                ))}
              </Grid>
            </Grid>
          </Grid >
        </Grid >
      </Container >
    // </section>
  );
}
