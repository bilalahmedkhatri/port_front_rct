import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Link } from '@mui/material';


export default function InsetList({ data, info, option }) {

    const mailLink = () => {
        if (option === 'link') {
            let web_add = 'http://' + info
            return <Link href={web_add} rel="noreferrer" target='_blank' underline="none" color='inherit'><ListItemText primary={info} /></Link>
        } else if (option === 'mail') {
            let find_index = info.indexOf('@')
            let name = info.slice(0, find_index)
            let mailto = "mailto:" + info
            return <Link href={mailto} rel="noreferrer" target='_blank' underline="none" color='inherit'><ListItemText primary={name} /></Link>
        } else {
            return <ListItemText primary={info} />
        }
    }

    return (
        <List
            sx={{ pt: 0, pb: 0, width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
            aria-label="contacts"
        >
            <ListItem disablePadding >
                <ListItemIcon sx={{ minWidth: '1.78em', color:'#ffdf00' }}>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary={data} sx={{ maxWidth: '5.4rem', }} primaryTypographyProps={{ fontWeight: 600 }} />
                {mailLink()}
            </ListItem>
        </List>
    );
}
