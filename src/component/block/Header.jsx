import { useState } from "react"
import { Box, Link, Typography } from '@mui/material'
import './style.css'

import ListItemIcon from '@mui/material/ListItemIcon';

// MUI icons
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import { grey } from "@mui/material/colors";


export function Header() {

  const [isActive, setIsActive] = useState('home')

  const menusIcons = [
    { link: "#home", menus: "home", icons: (<HouseIcon fontSize="medium" />) },
    { link: "#about", menus: "about", icons: (<PersonIcon fontSize="medium" />) },
    { link: "#resume", menus: "resume", icons: (<DescriptionIcon fontSize="medium" />) },
    { link: "/image_converssion", menus: "Image Converssion", icons: (<SettingsOverscanIcon fontSize="medium" />) },
    { link: "#testimonials", menus: "testimonials", icons: (<ReviewsIcon fontSize="medium" />) },
    { link: "#contact", menus: "contact", icons: (<PermPhoneMsgIcon fontSize="medium" />) },
  ]
  return (
    <Box id="header1" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
      <nav id="navlink" className="navbar nav-menu">
        <ul>
          {menusIcons.map((x, key) => (
            <li key={key}>
              <Link href={`${x.link}`} underline="none" className={`nav-link scrollto ${isActive === x.menus && 'active'}`} onClick={() => setIsActive(x.menus)}>
                <ListItemIcon sx={{ minWidth: 0 }} >
                  {x.icons}
                </ListItemIcon>
                <span style={{ color: grey[800], fontSize: "18px", fontWeight: '600' }}>{x.menus.toUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  )
}
