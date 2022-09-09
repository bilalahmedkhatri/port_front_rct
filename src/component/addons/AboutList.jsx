import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Link } from '@mui/material';


export default function InsetList({ key, data, info, option }) {

    const mailLink = () => {
        if (option === 'link') {
            let web_add = 'http://' + info
            return <Link href={web_add} rel="noreferrer" target='_blank' underline="none" color='inherit'><ListItemText primary={info} /></Link>
        } else if (option === 'mail') {
            let mailto = "mailto:" + info
            return <Link href={mailto} rel="noreferrer" target='_blank' underline="none" color='inherit'><ListItemText primary={info} /></Link>
        } else {
            return <ListItemText primary={info} />
        }
    }

    return (
        <List
            sx={{ pt: 0, pb: 0, width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
            aria-label="contacts"
        >
            <ListItem disablePadding key={key} >
                <ListItemIcon sx={{ minWidth: '1.78em' }}>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary={data} sx={{ maxWidth: '5.4rem', }} primaryTypographyProps={{ fontWeight: 600 }} />
                {mailLink()}
            </ListItem>
            {/* <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '1.78em' }}>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Phone:" sx={{ maxWidth: '5rem' }} primaryTypographyProps={{ fontWeight: 600 }} />
                <ListItemText primary="+92 321 3009321" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: '1.78em' }}>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="City:" sx={{ maxWidth: '5rem' }} primaryTypographyProps={{ fontWeight: 600 }} />
                <ListItemText primary="Karachi, Pakistan" />
            </ListItem> */}
        </List>
    );
}
