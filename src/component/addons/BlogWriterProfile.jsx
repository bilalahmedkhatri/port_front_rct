import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

export default function BlogWriterProfile(props) {
  return (
    <List
      sx={{
        color: props.color,
        py: props.py,
        width: '100%',
        maxWidth: props.maxwidth,
        bgcolor: 'background.paper',
        '& .MuiListItem-root': {
          paddingLeft: '0px',
          paddingRight: props.pl,
        },
      }}
    >
      <ListItem sx={{ py: "0px" }}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
}
