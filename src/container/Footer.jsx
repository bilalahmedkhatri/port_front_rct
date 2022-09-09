import {
  Typography,
  Grid,
  Container,
  Box,
  Stack,
  Avatar,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Skype } from "./svg/skype.jsx";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

export function Footer() {
  return (
    // ======= Footer =======
    <footer id="footer">
      <Container sx={{ my: "2rem" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Box>
            <Typography
              variant="h3"
              component="div"
              fontWeight="bold"
              sx={{ marginTop: "1rem" }}
            >
              Bilal Ahmed
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ marginTop: "0.5rem" }}
            >
              Convert your Idea to your Business, That Business Generate your{" "}
              <strong>INCOME</strong>.
            </Typography>
            <Stack
              sx={{ marginTop: "1rem" }}
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Link href="https://twitter.com/bilalahmed_dev">
                <Avatar sx={{ bgcolor: grey[300], color: "#1DA1F2" }}>
                  <TwitterIcon />
                </Avatar>
              </Link>
              <Link href="https://www.facebook.com/bilalahmeddev/">
                <Avatar sx={{ bgcolor: grey[300], color: "#3b5998" }}>
                  <FacebookIcon />
                </Avatar>
              </Link>
              <Link href="https://www.instagram.com/bilalahmed_dev/">
                <Avatar sx={{ bgcolor: grey[300], color: "#E4405F" }}>
                  <Instagram />
                </Avatar>
              </Link>
              <Link href="https://www.linkedin.com/in/bilalahmeddev/">
                <Avatar sx={{ bgcolor: grey[300], color: "#0A66C2" }}>
                  <LinkedIn />
                </Avatar>
              </Link>
              <Avatar sx={{ bgcolor: grey[300], color: "#00AFF0" }}>
                <Skype />
              </Avatar>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </footer>
  );
}
