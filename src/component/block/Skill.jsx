import { Container, Typography, Grid, Chip, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { SectionTitle, ProgressBar2 } from "../../component";

export default function Skill() {
  const leftSkillSet = [
    { language: "HTML5, CSS3 & SCSS", stopValue: 70, timeRange: 40 },
    { language: "JavaScript", stopValue: 37, timeRange: 40 },
    { language: "Python", stopValue: 60, timeRange: 40 },
    { language: "MUI & Bootstrap", stopValue: 55, timeRange: 40 },
  ];
  const rightSkillSet = [
    { language: "React JS", stopValue: 40, timeRange: 40 },
    { language: "Django", stopValue: 55, timeRange: 40 },
    { language: "Machine Learning", stopValue: 20, timeRange: 40 },
    { language: "Docker, Git, AWS, and Linux", stopValue: 60, timeRange: 40 },
  ];

  const tags = [
    "HTML5",
    "CSS3",
    "SCSS",
    "JavaScript",
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "Requests",
    "Websockets",
    "Numpy",
    "Pandas",
    "Tensorflow",
    "OpenCV",
    "Scikit-learn",
    "Matplotlib",
    "react",
    "React Native",
    "Bootstrap",
    "MUI",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Machine Learning",
    "Docker",
    "Git",
    "AWS",
    "Linux",
  ];

  return (
    // <!-- ======= Skills Section ======= -->
    <Container data-aos="fade-up">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SectionTitle title="Skills" />
          <Typography variant="body1">
            Code is often written to solve a problem. I have the ability to
            identify problems and come up with the most efficient ways to solve
            them, with theis programming languages.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          spacing={2}
          className="skills-content"
        >
          {tags.map((tag, index) => (
            <Chip
              label={tag}
              key={index}
              sx={{
                mt: 2,
                mr: 1,
                borderRadius: 3,
                fontSize: 15,
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
