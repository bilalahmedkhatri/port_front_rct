import { Container, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
// import "./style.css"

// social Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey, green } from "@mui/material/colors";
import SocialLinks from "../addons/SocialLinks";


export default function FirstView() {
  var el = useRef(null)
  useEffect(() => {
    var typped = new Typed(el.current, {
      strings: ['Web Developer', 'Django Developer', 'React Developer', 'Freelancer'],
      loop: true,
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 4000,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "!"
    });
    return () => {
      typped.distroy();
    }
  }, [])

  const social_profile = [
    {profileLink: "https://twitter.com/bilalahmed_dev", icon: (<TwitterIcon fontSize="large" />), iconcolor : grey['A700'], hovercolor: green[500]  },
    {profileLink: "https://www.facebook.com/bilalahmeddev", icon: (<FacebookIcon fontSize="large" />), iconcolor: grey['A700'], hovercolor : green[500]  },
    {profileLink: "https://instagram.com/bilalahmed_dev", icon: (<InstagramIcon fontSize="large" />), iconcolor: grey['A700'], hovercolor : green[500]  },
    {profileLink: "https://www.linkedin.com/in/bilalahmeddev/", icon: (<LinkedInIcon fontSize="large" />), iconcolor: grey['A700'], hovercolor : green[500]  },
  ]

  return (
    // ======= Home Section =======
    <section id="home" style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
      <Container spacing={2} data-aos="zoom-in" data-aos-delay="500" sx={{ zIndex: '9990'}}>
        <Typography variant="h1">Bilal Ahmed</Typography>
        <p>I'm <span ref={el} style={{ textTransform: 'uppercase'}}></span></p>
        <SocialLinks social_profile={social_profile}/>
      </Container>
    </section>
  )
}
