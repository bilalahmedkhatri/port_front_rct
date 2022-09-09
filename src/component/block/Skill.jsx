import { Container, Typography, Grid } from "@mui/material"
import { SectionTitle, ProgressBar2 } from "../../component"


export default function Skill() {

    const leftSkillSet = [
        { language: "HTML5", stopValue: 90, timeRange: 40 },
        { language: "CSS3 & SCSS", stopValue: 80, timeRange: 40 },
        { language: "JavaScript", stopValue: 40, timeRange: 40 },
        { language: "Python", stopValue: 80, timeRange: 40 },
    ]
    const rightSkillSet = [
        { language: "React JS", stopValue: 70, timeRange: 40 },
        { language: "Django", stopValue: 75, timeRange: 40 },
        { language: "Odoo", stopValue: 80, timeRange: 40 },
        { language: "Docker, Git, AWS, and Linux", stopValue: 70, timeRange: 40 },
    ]

    return (
        // <!-- ======= Skills Section ======= -->
        <Container data-aos="fade-up">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SectionTitle title="Skills" />
                    <Typography variant='body1'>Code is often written to solve a problem. I have the ability to identify problems and come up with the most efficient ways to solve them, with theis programming languages.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className="skills-content">
                    {leftSkillSet.map((d, k) => (
                        <ProgressBar2 key={k} language={d.language} stopValue={d.stopValue} timeRange={d.timeRange} />
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className="skills-content">
                    {rightSkillSet.map((d, k) => (
                        <ProgressBar2 key={k} language={d.language} stopValue={d.stopValue} timeRange={d.timeRange} />
                    ))}
                </Grid>
            </Grid>
        </Container >
    )
}
