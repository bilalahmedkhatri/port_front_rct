import { Container, CssBaseline, Grid } from '@mui/material'
import { GlobalStyles } from '@mui/styled-engine'
import { Blog, BlogNavBar, BlogSideBar } from '../component'



export default function SingleBlog() {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <BlogNavBar />
      <Container maxWidth='lg' disableGutters component="main" sx={{ py: 4 }}>
        <Grid container >
          <Grid item xs={12} sm={12} md={8} lg={9} >
            <Blog />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <BlogSideBar />
          </Grid>
        </Grid>
      </Container>
      {/* <Body />
        <Footer /> */}
    </>
  )
}
