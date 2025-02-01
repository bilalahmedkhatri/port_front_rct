import { Grid, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useEffect } from "react";

export default function ContactEmail() {

  return (
    <Grid item xs container direction="column" marginTop="0.8rem">
      <Grid item>
        <Typography component="dev">
          <Box sx={{
            color: blueGrey['600'],
            textTransform: "capitalize",
          }}
          >
            bilalahmedkhatri@outlook.com
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
