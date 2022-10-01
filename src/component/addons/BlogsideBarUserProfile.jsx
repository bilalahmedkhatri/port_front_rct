import { Avatar, Button, IconButton, Stack, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system'
import { CustomButton } from '../../component'


export default function BlogsideBarUserProfile() {

    return (
        <Box sx={{ mt: 4 }}>
            <Avatar
                alt="A"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 85, height: 85 }}
            />
            <div style={{ height: '10px' }}></div>
            <Typography
                component='h2'
                variant='h2'
                fontWeight='700'
                fontSize={15}
            >
                Muhammad Aashaaz test
            </Typography>
            <CustomButton
                buttontext='786 Followers'
                textcolor={grey[600]}
                fontsize={11.5}
                px={0}
                texttransform='capitalize'
                paddingblock={0}
                my={1}
                bgcolor='#ffffff'
                bghcolor="#ffffff"
                hcolor={grey[800]}
            />
            <Typography
                component='p'
                variant='p'
                fontSize={11.5}
                color={grey[600]}
                sx={{
                    lineHeight: 1.5,
                    mb: 1,
                }}
            >
                Senior Applied Data Scientist at dunnhumby || Machine Learning and Deep Learning Ardent ||
            </Typography>
            <Stack direction="row" alignItems="center" >
                <CustomButton
                    buttontext='Follow'
                    textcolor='#ffffff'
                    fontsize={11.5}
                    texttransform='capitalize'
                    borderradius={20}
                    my={1}
                    bgcolor={green[600]}
                    bghcolor={green[800]}
                    hcolor='#ffffff'
                />
                <Button
                    sx={{
                        backgroundColor: green[600],
                        borderRadius: 20,
                        minWidth: 0,
                        width: 32,
                        height: 32,
                        ml: 1,
                        '&:hover': {
                            backgroundColor: green[800],
                        }
                    }}
                >
                    <EmailIcon sx={{ color: '#ffffff', fontSize: 18, }} />
                </Button>
            </Stack>

        </Box>
    )
}
