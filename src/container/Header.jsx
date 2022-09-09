import { useState } from "react"
import { Box, Typography } from '@mui/material'
import './style.css'

import ListItemIcon from '@mui/material/ListItemIcon';

// MUI icons
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { grey } from "@mui/material/colors";


export function Header(props) {

  const [isActive, setIsActive] = useState('home')

  const menusIcons = [
    { menus: "home", icons: (<HouseIcon fontSize="medium" />) },
    { menus: "about", icons: (<PersonIcon fontSize="medium" />) },
    { menus: "resume", icons: (<DescriptionIcon fontSize="medium" />) },
    { menus: "testimonials", icons: (<ReviewsIcon fontSize="medium" />) },
    { menus: "contact", icons: (<PermPhoneMsgIcon fontSize="medium" />) },
  ]
  return (
    <>
      <Box id="header1" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
        <nav id="navlink" className="navbar nav-menu">
          <ul>
            {menusIcons.map((x, key) => (
              <li key={key}>
                <a href={`#${x.menus}`} className={`nav-link scrollto ${isActive === x.menus && 'active'}`} onClick={() => setIsActive(x.menus)}>
                  <ListItemIcon sx={{ minWidth: 0 }} >
                    {x.icons}
                  </ListItemIcon>
                  <span style={{ color: grey[800], fontSize: "18px", fontWeight: '600' }}>{x.menus.toUpperCase()}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Box>
      {/* <header id="header" class="d-flex flex-column justify-content-center">

        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav> 

      </header>*/}


    </>
  )
}
