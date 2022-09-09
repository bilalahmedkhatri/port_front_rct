import { Container, Grid, Typography } from "@mui/material"
import { SectionTitle, ResumeExp } from '../../component'

export default function Resume() {
    return (
        <section id="resume">
            <Container data-aos="fade-up" >
                {/* ======= Resume Section ======= */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <SectionTitle title="resume" />
                        <Typography varaint='body1' >
                            Focused and quick-learning Software Engineer with 3+ years of experience in web development, and programming. I already worked on various projects and clients.
                        </Typography>
                        <Typography variant="h4" gutterTop mt={2}>
                            Professional Experience
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <ResumeExp />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
