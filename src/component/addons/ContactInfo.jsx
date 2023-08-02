import { Grid, Link, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function ContactInfo({ MainTitle, Paragraph1, Paragraph2, Capitalize }) {

  const [capitalize, setcapitalize] = useState("capitalize")

  useEffect(() => {
    if (Capitalize) { setcapitalize(Capitalize) }
  }, [])

  return (
    <Grid item xs container direction="column">
      <Grid item xs>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontWeight: 800, textTransform: "capitalize", color: blueGrey['700'], }}
        >
          {MainTitle}
        </Typography>
        <Typography sx={{ color: blueGrey['600'], textTransform: capitalize, fontSize: 14 }}>
          {Paragraph1}
        </Typography>
        <Typography sx={{ color: blueGrey['600'], textTransform: capitalize, fontSize: 14 }}>
          {Paragraph2}
        </Typography>
      </Grid>
    </Grid>
  );
}
