import React, { useState, useEffect, useRef } from 'react';
import { Typography, Link, Container, Box, Grid, useScrollTrigger } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function Footer() {
  const { isAuthenticated } = useAuth();
  const [isSticky, setIsSticky] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        if (scrollTop + windowHeight >= documentHeight - 10) { // -10 for small buffer
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={footerRef}
      component="footer"
      role="contentinfo"
      sx={{
        minWidth: '100vh',
        position: 'static',
        bottom: isSticky ? 0 : 'auto',
        width: '100%',
        backgroundColor: 'background.paper',
        zIndex: 100,
        transition: 'position 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container 
          spacing={3}
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: { xs: 2, md: 3 },
            px: { xs: 1, md: 2 }
          }}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              About Tech Blog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your trusted source for in-depth tech insights, programming tutorials, and industry best practices. Join our community of developers and tech enthusiasts.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Navigation
            </Typography>
            <Box component="nav" aria-label="Footer Navigation">
              <Link href="/blog" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Latest Posts
              </Link>
              <Link href="/categories" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Categories
              </Link>
              {isAuthenticated ? (
                <Link href="/dashboard" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                  Dashboard
                </Link>
              ) : (
                <Link href="/login" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                  Login
                </Link>
              )}
              <Link href="/contact" color="text.secondary" sx={{ display: 'block' }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="text.secondary" 
                sx={{ 
                  display: 'block', 
                  mb: 1,
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
                aria-label="Visit our Twitter page"
              >
                Twitter
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="text.secondary"
                sx={{ 
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
                aria-label="Visit our LinkedIn page"
              >
                LinkedIn
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box 
              sx={{ 
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 2,
                pt: 2,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {'Copyright © '}
                <Link color="inherit" href="/" aria-label="Home">
                  Tech Blog
                </Link>{' '}
                {new Date().getFullYear()}
              </Typography>
              <Box>
                <Link href="/privacy" color="text.secondary" sx={{ mx: 1 }}>
                  Privacy Policy
                </Link>
                <Link href="/terms" color="text.secondary" sx={{ mx: 1 }}>
                  Terms of Use
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;