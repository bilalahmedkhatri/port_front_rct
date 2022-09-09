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
    <Box id="header1" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
      <nav id="navlink" className="navbar nav-menu">
        <ul>
          {menusIcons.map((x, key) => (
            <li key={key}>
              <Link href={`#${x.menus}`} underline="none" className={`nav-link scrollto ${isActive === x.menus && 'active'}`} onClick={() => setIsActive(x.menus)}>
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
