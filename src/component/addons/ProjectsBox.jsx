import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Context } from "..";

export default function ProjectsCard() {
  const { projectData } = React.useContext(Context);
  return (
    <Fragment>
      {projectData.bStatus === "success" ? (
        <>
          {projectData.bRes.map((value, key) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea href={value.video} target="_blank">
                    <CardMedia
                      component="img"
                      height="140"
                      image={value.image}
                      alt={value.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}
                        variant="body1"
                        color="text.secondary"
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
}
