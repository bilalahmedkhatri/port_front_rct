import { Grid, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function ContactAdd() {
  return (
    <Grid item xs container direction="column">
      <Grid item>
        <Typography component="dev">
          <Box sx={{
            color: blueGrey['600'],
            textTransform: "capitalize",
          }}
          >
            <strong>Home</strong><br />
            Karachi, Pakistan<br />
            <strong>Current</strong><br />
            Moscow, Russia
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
