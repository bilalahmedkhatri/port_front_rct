import { Container, Grid } from "@mui/material";
import { SectionTitle, BackendAPIData, ProjectsCard } from "..";
import * as React from "react";

import { styled } from "@mui/material/styles";

export const Context = React.createContext();

export default function ProjectView() {
  const [projectData, setProjectData] = React.useState([]);

  React.useEffect(() => {
    async function getPojects() {
      const projects = await BackendAPIData("api-portfolio/projects/");
      setProjectData(projects);
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
      {projectData.bStatus === "success" ? (
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
