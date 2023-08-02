import { Container, Grid } from "@mui/material";
import { Slider, SectionTitle } from "..";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { styled } from "@mui/material/styles";


export default function ProjectView() {

  const ProjectViewCustomStyle = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      padding: '0.5cm 2cm 1cm 2cm',
    },
  }));

  return (
    // < !-- ======= Testimonials Section ======= -->
    <section id="testimonials">
      <Container fixed data-aos="fade-up">
        <ProjectViewCustomStyle container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <SectionTitle title="Project View" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MultiActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MultiActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MultiActionAreaCard />
          </Grid>
        </ProjectViewCustomStyle>
      </Container>
    </section>
  );
}



function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
