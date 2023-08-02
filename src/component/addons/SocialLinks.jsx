import { Box, Link } from '@mui/material'
import React from 'react'
import { red, blue, green } from '@mui/material/colors'
import { styled } from '@mui/material/styles'


export default function SocialLinks(props) {

    const SocialLinksContainer = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'left',
            width: '100%',
            marginTop: '0.4cm',
        },
    }));
    
    const SocialLink = styled(Link)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            margin: '5px',
            // marginTop: '0.4cm',
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '0.7cm',
        },
    }))
    

    return (
        <SocialLinksContainer>
            {props.social_profile.map((d, k) => (
                <SocialLink
                    key={k}
                    href={d.profileLink}
                    target="_blank"
                    rel="noreferrer"
                    underline='none'
                    sx={{
                        color: d.iconcolor,
                        // mr: 3,
                        '&:hover': {
                            color: d.hovercolor,
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: d.iconsize,
                        },
                    }}
                >
                    {d.icon}
                </SocialLink>
            ))}
        </SocialLinksContainer>
    )
}
