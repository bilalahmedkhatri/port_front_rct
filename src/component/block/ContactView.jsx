import { Grid, Box } from "@mui/material";
import { ContactAdd, ContactEmail, ContactInfo } from "../../component";
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
    <Grid container spacing={2}>
      <Grid item xs={9} sm md={4} lg={4} container
        sx={{
          // Hover on child classes
          "&:hover .hover1": {
            bgcolor: primary_green,
          },
          "&:hover .hover2": {
            color: primary_green_light,
          },
        }}
      >
        <Box sx={{ width: 50, mr: 2 }}>
          <BOX className="hover1">
            <LocationOnOutlinedIcon
              className="hover2"
              sx={{ fontSize: 27, color: green[500] }}
            />
          </BOX>
        </Box>
        <ContactAdd />
      </Grid>
      <Grid item xs={9} sm md={4} lg={4} container
        sx={{
          // Hover on child classes
          "&:hover .hover1": {
            bgcolor: primary_green,
          },
          "&:hover .hover2": {
            color: primary_green_light,
          },
        }}>
        <Box sx={{ width: 50, mr: 2 }}>
          <BOX className="hover1">
            <PhoneIphoneOutlinedIcon
              className="hover2"
              sx={{ fontSize: 27, color: green[500] }}
            />
          </BOX>
        </Box>
        <ContactEmail />
      </Grid>
      <Grid item xs={9} sm md={4} lg={4} container
        sx={{
          // Hover on child classes
          "&:hover .hover1": {
            bgcolor: primary_green,
          },
          "&:hover .hover2": {
            color: primary_green_light,
          },
        }}>
        <Box sx={{ width: 50, mr: 2 }}>
          <BOX className="hover1">
            <PhoneIphoneOutlinedIcon
              className="hover2"
              sx={{ fontSize: 27, color: green[500] }}
            />
          </BOX>
        </Box>
        <ContactInfo />
      </Grid>
    </Grid>
  );
}
