import { Container, Typography, Grid, Chip } from "@mui/material";
import { SectionTitle} from "../../component";

export default function Skill() {

  const tags = [
    "HTML5",
    "CSS3",
    "SCSS",
    "JavaScript",
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "LangChain",
    "Odoo",
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
    "API",
    "RESTful API",
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
