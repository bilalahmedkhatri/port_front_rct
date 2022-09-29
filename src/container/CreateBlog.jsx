import React from 'react'
import { Container, FormControl, FormHelperText, Grid, TextField, Input } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'


export default function CreateBlog() {
    const mytheme = createTheme()
    return (
        <Container >
            <Grid item>
                <Grid sm={12} md={12}>

                    <ThemeProvider theme={mytheme}>
                        <MUIRichTextEditor />
                    </ThemeProvider>

                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <Input
                            id="standard-adornment-weight"
                            // value={values.weight}
                            // onChange={handleChange('weight')}
                            // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <TextField type="file" />
                        <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>

    )
}
