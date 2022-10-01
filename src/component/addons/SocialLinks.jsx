import { Box, Link } from '@mui/material'
import React from 'react'


export default function SocialLinks( props ) {

    return (
        <div style={{ display: 'flex', justifyContent:'right', width:'100%'}}>
            {props.social_profile.map((d, k) => (
                <Link
                    key={k}
                    href={d.profileLink}
                    target="_blank"
                    rel="noreferrer"
                    underline='none'
                    sx={{
                        mr: 1,
                        color: props.iconcolor,
                        '&:hover': {
                            color: props.hovercolor,
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: props.iconsize,
                            verticalAlign: 'middle',
                        },
                    }}
                >
                    {d.icon}
                </Link>
            ))}
        </div>
    )
}
