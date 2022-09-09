import { Grid, TextField, Button, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FormView() {
  const [ip, setIP] = useState("");
  const [formNote, setFormNote] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function ip_add() {
    try {
      const res = await axios.get("https://geolocation-db.com/json/");
      setIP(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ip_add();
  }, []);

  function gerFormData(event) {
    axios({
      method: "POST",
      url: "/contact-form/",
      data: {
        full_name: formNote.full_name,
        email: formNote.email,
        subject: formNote.subject,
        message: formNote.message,
        ip_address: ip.IPv4,
        city: ip.city,
        country: ip.country_name,
      },
    })
      // .then((response) => {
      //   console.log(response.data);
      // })
      // .catch((response) => {
      //   console.log(response.error);
      // });
    setFormNote({
      full_name: "",
      email: "",
      subject: "",
      message: "",
    });
    event.preventDefault();
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setFormNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            color="success"
            fullWidth
            id="filled-basic"
            variant="filled"
            type="text"
            label="Full Name"
            name="full_name"
            onChange={handleChange}
            value={formNote.full_name}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            color="success"
            fullWidth
            id="filled-basic"
            variant="filled"
            type="email"
            label="Your Email"
            name="email"
            onChange={handleChange}
            value={formNote.email}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            color="success"
            fullWidth
            id="filled-basic"
            variant="filled"
            type="text"
            label="Subject"
            name="subject"
            onChange={handleChange}
            value={formNote.subject}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            color="success"
            multiline
            rows={4}
            fullWidth
            id="filled-multiline-static"
            variant="filled"
            type="text"
            label="Message"
            name="message"
            onChange={handleChange}
            value={formNote.message}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} marginTop={2}>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
              onClick={gerFormData}
              sx={{
                paddingTop: "15px",
                borderRadius: 20,
                bgcolor: green[400],
                paddingX: 3,
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: green[500],
                  color: green[50],
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
