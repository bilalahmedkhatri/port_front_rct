import React from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; // Or a custom icon if needed
import AnchorTemporaryDrawer from './MobileSideBar';


function Menus({isMobile}) {

  return (
    <>
      <Box
        sx={{
          width: isMobile ? '100%' : 'auto',
          overflowX: isMobile ? 'auto' : 'visible',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        <Box
          sx={{
            borderRadius: 20,
            backgroundColor: '#f0ece7',
            display: 'flex',
            flexWrap: isMobile ? 'nowrap' : 'wrap'
          }}
        >
          <Button>Home</Button>
          <Button>Articles</Button>
          <Button>E-book</Button>
          <Button>Podcast</Button>
          <Button>About</Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          width: isMobile ? '100%' : 'auto',
          flexDirection: isMobile ? 'column' : 'row'
        }}
      >
        <Button
          variant="contained"
          fullWidth={isMobile}
          sx={{
            backgroundColor: '#424242',
            color: 'white',
            borderRadius: 8,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#555555',
            },
          }}
        >
          Join Now
        </Button>
      </Box>
    </>
  )
}

const GenHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        margin: '0 auto',
        flexGrow: 1,
        display: 'flex',
        alignItems: isMobile ? '' : 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fda8f2',
        height: isMobile ? 'auto' : 50,
        padding: isMobile ? '' : '0 20px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 2 : 0
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ color: '#333', fontSize: 30 }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
          AshGray
        </Typography>
      </Box>

      {/* Navigation */}
      {isMobile ? (
        <AnchorTemporaryDrawer />
      ) : (
        <Menus isMobile={isMobile} />
      )}
    </Box>
  );
};


export default function BlogHeader() {
  return (
    <>
      <GenHeader />
    </>
  )

};

