import styled from '@emotion/styled'
import { Button, Link, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import BlogWriterProfile from './BlogWriterProfile'

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
        <Box sx={{ mt: 4 }}>
            <Typography component='p' mb={1} fontWeight='700' >Topics matching Django </Typography>
            {blogs.map((value) => (
                <Follow>
                    <BlogWriterProfile py='0px' maxwidth="400" pl='0' />
                    <Button sx={{
                        fontSize: '11px',
                        color: grey[50],
                        px: 1,
                        backgroundColor: green[500],
                        fontWeight: 'bold',
                        borderRadius: '15px',
                        "&:hover" : {
                            backgroundColor: green[600],
                            // marginTop: '100px'
                        }
                    }}>
                        Follow
                    </Button>
                </Follow>
            ))}
            <br />
            <Link href='' fontSize={10}>See all</Link>
        </Box>
    )
}
