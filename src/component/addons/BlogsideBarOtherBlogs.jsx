import styled from '@emotion/styled'
import { Button, Link, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import BlogWriterProfile from './BlogWriterProfile'
import CustomButton from './CustomButton'

const blogs = [
    { title: "django Developer" },
    { title: "Python Developer" },
    { title: "HTML Developer" },
    { title: "React Developer" },
    { title: "JavaScript Developer" },
    { title: "AWS Developer" },
]

const Follow = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiLink-root': {
        padding: 1,
        backgroundColor: grey[300],

    },
}))

export default function BlogsideBarOtherBlogs() {
    return (
        <Box sx={{ my: 3}}>
            <Typography component='p' mb={1} fontWeight='700' >Topics matching Django </Typography>
            {blogs.map((value) => (
                <Follow>
                    <BlogWriterProfile py='0px' maxwidth="400" pl='0' />
                    <CustomButton
                        buttontext="follow"
                        fontsize={11}
                        texttransform='capitalize'
                        textcolor={grey[50]}
                        borderradius={15}
                        bgcolor={green[500]}
                        bghcolor={green[600]}
                        fontweight='bold'
                    />
                </Follow>
            ))}
        </Box>
    )
}
