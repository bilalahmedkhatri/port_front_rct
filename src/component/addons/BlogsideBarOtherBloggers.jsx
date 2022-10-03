import styled from '@emotion/styled'
import { green, grey } from '@mui/material/colors'
import BlogWriterProfile from './BlogWriterProfile'
import CustomButton from './CustomButton'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Link, sliderClasses } from '@mui/material';
import { useEffect, useState } from 'react';

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

function TopWriters() {
    return (
        <Box sx={{ my: 3 }}>
            <Typography component='p' mb={1} fontWeight='700' >Top Writers</Typography>
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

function Blogs() {

    return (
        <Box sx={{ my: 3 }}>
            <Typography component='p' mb={1} fontWeight='700' fontSize={15} >More From Azeemlab</Typography>
            {blogs.map((value) => (
                <Card sx={{ display: 'flex', my: 1, boxShadow: 'none' }}>
                    <Box sx={{ width: '100%', maxwidth: 250, }}>
                        <CardContent sx={{ p: 0, flex: '1 0 auto', pt: 0.3 }}>
                            <Link href="" underline='none' color={grey[800]} >
                                <Stack direction='row'>
                                    <Avatar sx={{ width: 25, height: 25, alignItems: 'center' }} />
                                    <Typography component="p" variant="h5" fontSize={12} alignItems='center' py={0.61} pl={1} >
                                        Live From Space
                                    </Typography>
                                </Stack>
                            </Link>
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    color="#222222"
                                    component="div"
                                    fontSize={13}
                                    fontWeight='bold'
                                    lineHeight={1.3}
                                    pl={0.3}
                                    pt={0.7}
                                    id='countlines'
                                    // width={200}
                                    // height={20}
                                    sx={{
                                        WebkitLineClamp: '2',
                                        WebkitBoxOrient: 'vertical',
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    Mac Miller Live information and going to be best in this session Space
                                </Typography>
                            </div>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 70, height: 70, marginLeft: 'auto', order: 2 }}
                        image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Live from space album cover"
                    />
                </Card>
            ))}
        </Box>
    )
}

export default function BlogsideBarOtherBloggers(props) {
    if (props.done === true) {
        return <TopWriters />
    } else {
        return <Blogs />
    }
}
