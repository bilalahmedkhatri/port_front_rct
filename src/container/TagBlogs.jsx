import { Container, CssBaseline, GlobalStyles, Grid } from "@mui/material"
import { BlogSideBar, Blog, BlogNavBar  } from "../component"


export default function TagBlogs() {
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <BlogNavBar />
            <Container maxWidth='lg' disableGutters component="main" sx={{ pt: 8, pb: 6 }}>
                <Grid container >
                    <Grid item xs={8} sm={8} md={8} lg={9} >
                        <Blog />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={3}>
                        <BlogSideBar />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
