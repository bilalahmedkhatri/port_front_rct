import { Button, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { CustomButton } from '../../component'

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
                    <>
                        <CustomButton
                            buttontext={value.tag}
                            texttransform='capitalize'
                            textcolor={grey[800]}
                            fontweight={600}
                            bgcolor={grey[200]}
                            borderradius={20}
                            px={2}
                            marginright={1}
                            margintop={1}
                            fontsize={11.5}
                        />
                    </>
                ))}
            </Box>
            <Link href='' fontSize={10}>See all</Link>
        </Box>
    )
}

