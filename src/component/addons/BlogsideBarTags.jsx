import { Button, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'

const Tags = [
    { tag: "django" },
    { tag: "Python" },
    { tag: "HTML" },
    { tag: "React" },
    { tag: "JavaScript" },
    { tag: "AWS" },
]

export default function BlogsideBarTags() {
    return (
        <Box sx={{ mt: 4 }} spacing={2}>
            <Typography component='p' fontWeight='700' >Topics matching Django </Typography>
            <Box sx={{ my: 1 }}>
                {Tags.map((value) => (
                    <Button sx={{ color: '#263238', mr: 1, px: 2, backgroundColor: grey[200], borderRadius: '20px', mt: 1 }}>{value.tag} </Button>
                ))}
            </Box>
            <Link sx={{ marginTop: 20 }} href='' fontSize={10}>See all</Link>
        </Box>
    )
}

