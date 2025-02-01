import React from 'react'
import { Container, FormControl, FormHelperText, Grid, TextField } from '@mui/material'

export default function CreateBlog2() {
    return (
        <Container>
            <Grid item>
                <Grid sm={12} md={12}>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <TextField 
                            id="blog-title"
                            label="Blog Title" 
                            variant="standard"
                            fullWidth 
                        />
                        <TextField
                            id="blog-description"
                            label="Short Description"
                            variant="standard"
                            multiline
                            rows={2}
                            fullWidth
                        />
                        <TextField 
                            type="file"
                            helperText="Upload cover image"
                        />
                        <FormHelperText>All fields are required</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    )
}
