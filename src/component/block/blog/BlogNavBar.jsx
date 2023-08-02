import { useState } from "react"
import { Box, Link, Divider } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
// MUI icons
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { grey } from "@mui/material/colors";


export default function BlogNavBar() {

    const [isActive, setIsActive] = useState('home')

    const menusIcons = [
        { link: "", icons: (<HouseIcon fontSize="medium" />) },
        { link: "", icons: (<PersonIcon fontSize="medium" />) },
        { link: "", icons: (<DescriptionIcon fontSize="medium" />) },
        { link: "", icons: (<ReviewsIcon fontSize="medium" />) },
        { link: "", icons: (<PermPhoneMsgIcon fontSize="medium" />) },
    ]
    return (
        <Box id="blog-header" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${grey[200]}` }}>
            <nav id="" className="navbar nav-menu1">
                <ul>
                    {menusIcons.map((x, key) => (
                        <li key={key}>
                            <Link href={`${x.link}`} underline="none" className={`nav-link scrollto ${isActive === x.link && 'active'}`} onClick={() => setIsActive(x.link)}>
                                <ListItemIcon sx={{ minWidth: 0, mb: 3 }} >
                                    {x.icons}
                                </ListItemIcon>
                            </Link>
                        </li>
                    ))}
                    <Divider sx={{ mb: 3}} />
                    <li>
                        <Link href="" underline="none" className="nav-link scrollto active">
                            <ListItemIcon sx={{ minWidth: 0, mb: 3 }} >
                                <ModeEditOutlineRoundedIcon />
                            </ListItemIcon>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Box>
    )
}
