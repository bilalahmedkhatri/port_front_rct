import { Container, Grid } from "@mui/material";
import { SectionTitle, BackendAPIData, ProjectsCard } from "..";
import * as React from "react";

import { styled } from "@mui/material/styles";

export const Context = React.createContext();

export default function ProjectView() {
  const [projectData, setProjectData] = React.useState([]);

  React.useEffect(() => {
    async function getPojects() {
      try {
        const projects = await BackendAPIData("api-portfolio/projects/");
        setProjectData(projects.bRes);
        console.log("res", projects.bRes);
      } catch (error) {
        console.error("error");
      }
    }
    getPojects();
  }, []);

  const ProjectViewCustomStyle = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: "0.5cm 2cm 1cm 2cm",
    },
  }));

  return (
    // < !-- ======= Projects Section ======= -->
    <Context.Provider value={{ projectData }}>
      {projectData.length > 0 ? (
        <section id="projects">
          <Container fixed data-aos="fade-up">
            <ProjectViewCustomStyle container spacing={4}>
              <Grid item xs={12} sm={12} md={12}>
                <SectionTitle title="Project View" />
              </Grid>
              <ProjectsCard />
            </ProjectViewCustomStyle>
          </Container>
        </section>
      ) : (
        ""
      )}
    </Context.Provider>
  );
}

// function MultiActionAreaCard() {
//   const { projectData } = React.useContext(Context);
//   return (
//     {projectData.map(() => {

//       <Grid item xs={12} sm={6} md={4}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//           />
//           <CardContent>
//           <Typography
//           gutterBottom
//           variant="h5"
//           component="div"
//           sx={{
//             display: "-webkit-box",
//             overflow: "hidden",
//             WebkitBoxOrient: "vertical",
//             WebkitLineClamp: 2,
//           }}
//           >
//           Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents
//             </Typography>
//             <Typography
//               sx={{
//                 display: "-webkit-box",
//                 overflow: "hidden",
//                 WebkitBoxOrient: "vertical",
//                 WebkitLineClamp: 3,
//               }}
//               variant="body1"
//               color="text.secondary"
//               >
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//             </Button>
//         </CardActions>
//       </Card>
//       </Grid>
//     })}
//   );
// }
