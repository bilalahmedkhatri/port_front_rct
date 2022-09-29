import React from 'react'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Card, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import { BlogWriterProfile, SocialLinks, BlogFigCaption } from '../../component'

// social Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';


const social_profile = [
    { profileLink: "https://twitter.com/bilalahmed_dev", icon: (<TwitterIcon fontSize='medium' />) },
    { profileLink: "https://www.facebook.com/bilalahmeddev", icon: (<FacebookIcon fontSize="medium" />) },
    { profileLink: "https://www.linkedin.com/in/bilalahmeddev/", icon: (<LinkedInIcon fontSize="medium" />) },
    { profileLink: "https://bilalahmed-dev.azeemlab.com/", icon: (<LinkIcon fontSize="medium" />) },
]

const CSToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        paddingLeft: 0,
        paddingRight: 0,
    },
}))

export default function Blog() {
    return (
        <Container sx={{ maxWidth: 750 }} maxWidth="750px" alignItems="center" justifyContent="center">
            <CSToolbar>
                <BlogWriterProfile maxwidth="500px" py="8px"/>
                <SocialLinks p_l="12px" social_profile={social_profile} align="left" />
            </CSToolbar>
            <Typography variant='h1' component={"h1"} fontSize={32} fontWeight='bold' pt={3} >Introduction to Computer Vision & OpenCV in Python</Typography>
            <Card sx={{ mt: 3, pb: 1 }}>
                <CardMedia component="img" alt='test' image="https://media.gettyimages.com/photos/quaideazam-picture-id184944186" />
                <BlogFigCaption />
            </Card>
            <Box pt={4}>
                <Typography variant='body1' component="p">
                    Hello Everyone,

                    Computer vision is one of the most exciting divisions of computer science. A lot of research has been carried in this field for decades. Processing of images becomes faster and efficient thanks to cloud technologies and powerful GPUs and TPUs. Cars, robots, and drones start to understand what we see in pictures and videos. The interface “computer vision” between machines and humans will gain much more importance within the next few years.

                    Computer Vision is considered to be the hottest field in the era of Artificial intelligence. It can be hectic for newbies as there are some challenges that most people face while making a transition into computer vision

                    Is the Computer vision model is trainable in absence of GPU & TPUs?
                    Image Preprocessing -Cleaning of Image Dataset?
                    Why we use Deep learning instead of Machine learning for computer vision?
                    Should we collect more images before building our computer vision model?

                    You got it right I too faced these challenges so came up with this guide for helping you out in the field of computer vision.

                    Hang Tight!

                    What is Computer Vision?

                    According to Wikipedia

                    Computer vision is an interdisciplinary scientific field that deals with how computers can be made to gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do.

                    In Simple words Computer vision is a field of deep learning that allows the machine to identify, process images just like humans do. In terms of parsing images humans perform extremely well but when it comes to machines detecting objects involves multiple and complex steps, including feature extraction (edges detection, shapes, etc), feature classification, etc.

                    OpenCV — Evolution in Computer Vision

                    According to OpenCV:

                    “OpenCV is released under a BSD license and hence it’s free for both academic and commercial use. It has C++, C, Python and Java interfaces and supports Windows, Linux, Mac OS, iOS and Android. OpenCV was designed for computational efficiency and with a strong focus on real-time applications. Written in optimized C/C++, the library can take advantage of multi-core processing. Enabled with OpenCL, it can take advantage of the hardware acceleration of the underlying heterogeneous compute platform.”

                    OpenCV contains implementations of more than 2500 algorithms! It is freely available for commercial as well as academic purposes. The library has interfaces for multiple languages, including Python, Java, and C++.

                    Setting up OpenCV

                    The point to be noted here that on the internet you can find many tutorials for installation Opencv in your ubuntu or windows machines. Just follow this link that helps me a lot in setup everything on the fly.

                    Now Hopping up on the fun part!

                    Reading, Writing and Displaying Images

                    An image can be represented as a multidimensional array. This is because a machine can represent everything as numbers and in python, numpy can be used to represent it while in C programming language it can be represented as format Mat.
                </Typography>
            </Box>
        </Container>
    )
}
