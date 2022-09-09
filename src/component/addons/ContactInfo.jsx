import { Grid, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function ContactInfo({ MainTitle, Paragraph }) {
  return (
    <Grid item xs container direction="column">
      <Grid item xs>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontWeight: 800, textTransform: "capitalize",  color: blueGrey['600'],}}
        >
          {MainTitle}
        </Typography>
        <Typography sx={{ color: blueGrey['500'], textTransform: "capitalize", fontSize: 14 }}>
          {Paragraph}
        </Typography>
      </Grid>
    </Grid>
  );
}
