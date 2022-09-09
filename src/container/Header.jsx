import { useState } from "react"
import { Box } from '@mui/material'
import './style.css'

import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';

// MUI icons
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';


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
                {menusIcons.map((x, key) => (
                    <li key={key}>
                        <a href={`#${x.menus}`} className={`nav-link scrollto ${isActive === x.menus && 'active'}`} onClick={() => setIsActive(x.menus)}>
                            <ListItemIcon >
                                {x.icons}
                            </ListItemIcon>
                            <span>{x.menus.toUpperCase()}</span>
                        </a>
                    </li>
                ))}
            </nav>
        </Box >
    )
}
