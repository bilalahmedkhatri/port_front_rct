import { useState, ReactElement, cloneElement } from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

function generate(element: ReactElement) {
    // infoList = 
    return [0, 1, 2].map((value) =>
        cloneElement(element, {
            key: value,
        }),
    );
}

export default function ListBio() {

    const [secondary, setSecondary] = useState()

    return (
        <List>
            {generate(
                <ListItem>
                    <DoubleArrowRoundedIcon />
                    <ListItemText primary="Website:" />
                    <ListItemText
                        primary='Single-line item'
                        secondary={secondary ? 'secondary text' : null}
                    />
                </ListItem>
            )}
        </List>
    )
}
