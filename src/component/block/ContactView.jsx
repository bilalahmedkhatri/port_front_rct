import { Grid, Box } from "@mui/material";
import { ContactInfo } from "../../component";
import { styled } from "@mui/material/styles";

import { green } from "@mui/material/colors";

// Mui Icons
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function ContactView() {
  const BOX = styled(Box)({
    float: "left",
    width: "50px",
    height: "50px",
    background: "#eef7ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    transition: "all 0.3s ease-in-out",
  });

  const primary_green = green[500];
  const primary_green_light = green[50];

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          marginBottom: 4,
          // Hover on child classes
          "&:hover .hover1": {
            bgcolor: primary_green,
          },
          "&:hover .hover2": {
            color: primary_green_light,
          },
        }}
      >
        <Grid item>
          <Box sx={{ width: 50 }}>
            <BOX className="hover1">
              <LocationOnOutlinedIcon
                className="hover2"
                sx={{ fontSize: 27, color: green[500] }}
              />
            </BOX>
          </Box>
        </Grid>
        <Grid item xs={9} sm md={8} lg={8} container>
          <ContactInfo
            MainTitle="Location:"
            Paragraph1="Current - Moscow, Russia"
            Paragraph2="From - Karachi, Pakistan"
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          marginBottom: 4,
          // Hover on child classes
          "&:hover .hover1": {
            bgcolor: primary_green,
          },
          "&:hover .hover2": {
            color: primary_green_light,
          },
        }}
      >
        <Grid item>
          <Box sx={{ width: 50 }}>
            <BOX className="hover1">
              <MailOutlinedIcon
                className="hover2"
                sx={{ fontSize: 27, color: green[500] }}
              />
            </BOX>
          </Box>
        </Grid>
        <Grid item xs={9} sm md={8} lg={8} container>
          <ContactInfo
            MainTitle="Email:"
            Paragraph2="bilalahmedkhatri@outlook.com"
            Capitalize="lowercase"
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          marginBottom: 4,
          // Hover on child classes
          "&:hover .hover1": {
            bgcolor: primary_green,
          },
          "&:hover .hover2": {
            color: primary_green_light,
          },
        }}
      >
        <Grid item>
          <Box sx={{ width: 50 }}>
            <BOX className="hover1">
              <PhoneIphoneOutlinedIcon
                className="hover2"
                sx={{ fontSize: 27, color: green[500] }}
              />
            </BOX>
          </Box>
        </Grid>
        <Grid item xs={9} sm md={8} lg={8} container>
          <ContactInfo 
            MainTitle="Cell No:"
            Paragraph1="WhatsApp +92 321 300 93 21"
            Paragraph2="call +7 999 85 15 949"
          />
        </Grid>
      </Grid>
    </>
  );
}
