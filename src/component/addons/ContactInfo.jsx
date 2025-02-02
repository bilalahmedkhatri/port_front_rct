import { Grid, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function ContactInfo() {
  return (
    <Grid item xs container direction="column">
      <Grid item>
        <Typography component="dev">
          <Box sx={{
            color: blueGrey['600'],
            textTransform: "capitalize",
          }}
          >
            <strong>WhatsApp</strong><br />
            +92 321 300 9321<br />
            <strong>Phone & Telegram</strong><br />
            +7 999 85 15 949
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
